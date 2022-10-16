import React, {useCallback, useEffect, useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OPNewsList from '../components/organisms/OPNewsList/OPNewsList';
import {getNews, getNewsById} from '../store/actions/NewsAction';
import {RootState} from '../store/reducers/RootReducer';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import {AppRoute} from '../navigation/Routes';
import {useTranslation} from 'react-i18next';
import {NewsListScreenProps} from '../navigation/NewsNavigator';

const NewsListScreen: React.FC<NewsListScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const dispatch: any = useDispatch();
  const {news} = useSelector((state: RootState) => state.news);

  const [page, setPage] = useState<number>(1);

  const getData = useCallback(
    (newPage: number) => {
      dispatch(getNews(newPage));
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

  const handleGoToNews = (id: number) => {
    dispatch(getNewsById(id));
    navigation.navigate(AppRoute.NEWS_SCREEN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <OPSubheader
        heading="Vesti"
        showBackButton={false}
        showDropdown={false}
      />
      <OPSubheader heading={t('tabNavigator.news')} showBackButton={false} />
      <OPNewsList
        news={news}
        onPress={handleGoToNews}
        onLoadMore={handleLoadNextPage}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NewsListScreen;
