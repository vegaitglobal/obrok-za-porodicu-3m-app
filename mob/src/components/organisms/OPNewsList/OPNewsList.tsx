import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {NewsDTO} from '../../../models/News/NewsDTO';
import OPNewsListItem from '../../molecules/OPNewsListItem/OPNewsListItem';
import {styles} from './style';

interface OPNewsListProps {
  news: Array<NewsDTO>;
  onPress: (id: number) => void;
}

const OPNewsList: React.FC<OPNewsListProps> = ({news, onPress}) => {
  const handleRenderAction = ({item, index}: ListRenderItemInfo<NewsDTO>) => {
    return <OPNewsListItem key={index} news={item} onPress={onPress} />;
  };
  return (
    <FlatList
      data={news}
      style={styles.container}
      contentContainerStyle={styles.content}
      renderItem={handleRenderAction}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default OPNewsList;
