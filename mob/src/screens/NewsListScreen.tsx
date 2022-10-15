import React, {useCallback, useEffect} from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OPNewsList from '../components/organisms/OPNewsList/OPNewsList';
import {NewsDTO} from '../models/News/NewsDTO';
import {getNews} from '../store/actions/NewsAction';
import {RootState} from '../store/reducers/RootReducer';

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

const NewsListScreen = () => {
  const dispatch: any = useDispatch();
  const {news} = useSelector((state: RootState) => state.news);

  const getData = useCallback(() => {
    // dispatch(getNews(1));
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <SafeAreaView style={styles.container}>
      <OPNewsList news={newsList} onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NewsListScreen;
