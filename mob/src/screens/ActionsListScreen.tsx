import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import messaging from '@react-native-firebase/messaging';

import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/reducers/RootReducer';
import {AppRoute} from '../navigation/Routes';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import OPActionsList from '../components/organisms/OPActionsList/OPActionsList';
import OPHeader from '../components/organisms/OPHeader/OPHeader';
import {TextStyles} from '../constants/TextStyles';
import {getVolunteerActions} from '../store/actions/VolunteerAction';
import {ActionScreenProps} from '../navigation/ActionsNavigator';
import {NotificationToast} from '../components/organisms/OPNotificationToast/Notification';

const ActionsListScreen: React.FC<ActionScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const dispatch: any = useDispatch();
  const {volunteerActions} = useSelector(
    (state: RootState) => state.volunteerActions,
  );

  useEffect(() => {
    // App was in QUIT mode
    messaging()
      .getInitialNotification()
      .then(m => {
        console.log(m);
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

  const [page, setPage] = useState<number>(1);

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
        onPress={actionId =>
          navigation.navigate(AppRoute.ACTION_SCREEN, {actionId: actionId})
        }
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
