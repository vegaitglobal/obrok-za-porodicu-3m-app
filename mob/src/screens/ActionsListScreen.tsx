import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';
import messaging from '@react-native-firebase/messaging';
import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import OPActionsList from '../components/organisms/OPActionsList/OPActionsList';
import OPHeader from '../components/organisms/OPHeader/OPHeader';
import {NotificationToast} from '../components/organisms/OPNotificationToast/Notification';
import {TextStyles} from '../constants/TextStyles';
import {ActionListScreenProps} from '../navigation/ActionsNavigator';
import {AppRoute} from '../navigation/Routes';
import {getVolunteerActions} from '../store/actions/VolunteerAction';
import {RootState} from '../store/reducers/RootReducer';

const ActionsListScreen: React.FC<ActionListScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const dispatch: any = useDispatch();
  const {volunteerActions} = useSelector(
    (state: RootState) => state.volunteerActions,
  );
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    // App was in QUIT mode
    messaging()
      .getInitialNotification()
      .then(m => {
        m && console.log(m);
      });

    // App was in BACKGROUND mode
    messaging().onNotificationOpenedApp(message => {
      console.log(message);
    });

    // App is in ACTIVE mode
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);

      NotificationToast.show({
        title: remoteMessage.notification?.title,
        text: remoteMessage.notification?.body,
      });
    });

    return unsubscribe;
  }, [navigation]);

  const handleNavigateToAction = (id: number) => {
    navigation.navigate(AppRoute.ACTION_SCREEN, {actionId: id});
  };

  const handleNavigateFromLink = useCallback(
    (id: number, type: string) => {
      if (type === 'actions') {
        navigation.navigate(AppRoute.ACTION_SCREEN, {actionId: id});
      } else {
        navigation.navigate(AppRoute.NEWS_NAVIGATOR as any, {
          screen: AppRoute.NEWS_SCREEN,
          params: {newsId: id},
        });
      }
    },
    [navigation],
  );

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then((link: FirebaseDynamicLinksTypes.DynamicLink | null) => {
        if (link) {
          const linkParts: Array<string> = link.url.split('?')[0].split('/');
          const type: string = linkParts[linkParts.length - 1];
          const entityId: number = Number(link.url.split('?')[1].split('=')[1]);

          handleNavigateFromLink(entityId, type);
        }
      });

    const unsubscribe = dynamicLinks().onLink(
      (link: FirebaseDynamicLinksTypes.DynamicLink) => {
        console.log(link);

        const linkParts: Array<string> = link.url.split('?')[0].split('/');
        const type: string = linkParts[linkParts.length - 1];
        const entityId: number = Number(link.url.split('?')[1].split('=')[1]);

        handleNavigateFromLink(entityId, type);
      },
    );
    return () => unsubscribe();
  }, [handleNavigateFromLink, navigation]);

  const getData = useCallback(
    (newPage: number) => {
      dispatch(getVolunteerActions(newPage));
    },
    [dispatch],
  );

  useEffect(() => {
    getData(1);
  }, [getData]);

  const handleLoadNextPage = () => {
    getData(page + 1);
    setPage(page + 1);
  };

  const handleRefresh = () => {
    getData(1);
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <OPHeader />
      <OPSubheader heading={t('actionsList.trending')} />
      <OPActionsList
        actions={volunteerActions}
        onPress={actionId => handleNavigateToAction(actionId)}
        onLoadMore={handleLoadNextPage}
        onRefresh={handleRefresh}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  a: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 20,
  },
});

export default ActionsListScreen;
