import React, {useCallback, useEffect, useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OPNewsList from '../components/organisms/OPNewsList/OPNewsList';
import {getNews} from '../store/actions/NewsAction';
import {RootState} from '../store/reducers/RootReducer';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import {AppRoute} from '../navigation/Routes';

const NewsListScreen = ({navigation}) => {
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

  return (
    <SafeAreaView style={styles.container}>
      <OPSubheader heading="Vesti" showBackButton={false} />
      <OPNewsList
        news={news}
        onPress={newsId => navigation.navigate(AppRoute.NEWS_SCREEN, {newsId})}
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
