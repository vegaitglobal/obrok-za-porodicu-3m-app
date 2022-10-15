import React, {useCallback, useEffect, useState} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OPNewsList from '../components/organisms/OPNewsList/OPNewsList';
import {NewsDTO} from '../models/News/NewsDTO';
import {getNews} from '../store/actions/NewsAction';
import {RootState} from '../store/reducers/RootReducer';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import {AppRoute} from '../navigation/Routes';

const newsList: Array<NewsDTO> = [
  {
    id: 1,
    title: 'Vest naslov vesti #1',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    imageUrl:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Vest naslov vesti #2',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    imageUrl:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Vest naslov vesti #3',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    imageUrl:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  },
];

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
        news={newsList}
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
