import React, {useCallback, useEffect, useState} from 'react';

import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import OPNewsList from '../components/organisms/OPNewsList/OPNewsList';
import {NewsListScreenProps} from '../navigation/NewsNavigator';
import {AppRoute} from '../navigation/Routes';
import {getNews} from '../store/actions/NewsAction';
import {RootState} from '../store/reducers/RootReducer';

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
    navigation.navigate(AppRoute.NEWS_SCREEN, {newsId: id});
  };

  return (
    <SafeAreaView style={styles.container}>
      <OPSubheader
        heading={t('tabNavigator.news')}
        showBackButton={false}
        showDropdown={false}
      />
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
