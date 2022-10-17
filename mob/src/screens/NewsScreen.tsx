import dynamicLinks from '@react-native-firebase/dynamic-links';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import OPHtml from '../components/atoms/OPHtml/OPHtml';
import OPImage from '../components/atoms/OPImage/OPImage';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import {Colors} from '../constants/Colors';
import Icons from '../constants/Icons';
import {DOMAIN_LINK_URI, NEWS_DEEP_LINK_PREFIX} from '../constants/Links';
import {TextStyles} from '../constants/TextStyles';
import {NewsScreenProps} from '../navigation/NewsNavigator';
import {getNewsById} from '../store/actions/NewsAction';
import {resetCurrentNews} from '../store/reducers/NewsReducer';
import {RootState} from '../store/reducers/RootReducer';

const NewsScreen: React.FC<NewsScreenProps> = ({navigation, route}) => {
  const dispatch: any = useDispatch();
  const {t} = useTranslation();
  const {newsId} = route.params;
  const {currentNews} = useSelector((state: RootState) => state.news);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getNewsById(newsId));
  }, [dispatch, newsId]);

  if (!currentNews) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  const handleGoBack = () => {
    dispatch(resetCurrentNews());
    navigation.goBack();
  };

  const handleRefresh = () => {
    setRefreshing(true);
    currentNews && dispatch(getNewsById(newsId));
    setRefreshing(false);
  };

  const handleShare = async (deepLink: string) => {
    await Share.share({
      message: `${t('news.check_out')} \n\n${deepLink}`,
    });
  };

  const handleShareNews = () => {
    dynamicLinks()
      .buildLink({
        link: `${NEWS_DEEP_LINK_PREFIX}${currentNews.id}`,
        domainUriPrefix: DOMAIN_LINK_URI,
      })
      .then((deepLink: string) => {
        handleShare(deepLink);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <OPSubheader
        heading={t('general.back')}
        showBackButton
        onBackPressed={handleGoBack}
        showDropdown={false}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        {currentNews?.imageURL && (
          <OPImage
            source={{uri: currentNews?.imageURL}}
            style={styles.images}
          />
        )}
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{currentNews?.title}</Text>
        </View>
        <View style={styles.shareContainer}>
          <Text style={styles.shareText}>Podeli vest</Text>
          <TouchableOpacity onPress={handleShareNews}>
            {Icons.SHARE}
          </TouchableOpacity>
        </View>
        <View style={styles.htmlContainer}>
          <OPHtml html={currentNews?.description || ''} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  htmlContainer: {
    marginTop: 20,
    paddingBottom: 100,
    paddingHorizontal: 15,
  },
  images: {
    width: '100%',
    height: 224,
    marginBottom: 8,
  },
  headerTextContainer: {
    paddingHorizontal: 16,
  },
  headerText: {
    ...TextStyles.DOSIS_EXTRA_BOLD,
    fontSize: 18,
    marginBottom: 8,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  authorText: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 16,
    color: Colors.LIGHT_GRAY,
    marginBottom: 8,
  },
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  shareText: {
    ...TextStyles.DOSIS_BOLD,
    color: Colors.LIGHT_GRAY,
  },
});

export default NewsScreen;
