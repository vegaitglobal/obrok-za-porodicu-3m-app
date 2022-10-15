import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';
import {NewsDTO} from '../../../models/News/NewsDTO';
import OPNewsListItem from '../../molecules/OPNewsListItem/OPNewsListItem';
import {styles} from './style';

interface OPNewsListProps {
  news: Array<NewsDTO>;
  onPress: (id: number) => void;
  onRefresh: () => void;
  onLoadMore: () => void;
}

const OPNewsList: React.FC<OPNewsListProps> = ({
  news,
  onPress,
  onRefresh,
  onLoadMore,
}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRenderAction = ({item, index}: ListRenderItemInfo<NewsDTO>) => {
    return <OPNewsListItem key={index} news={item} onPress={onPress} />;
  };

  const handleRefresh = () => {
    setRefreshing(true);
    onRefresh();
    setRefreshing(false);
  };

  return (
    <FlatList
      data={news}
      style={styles.container}
      contentContainerStyle={styles.content}
      renderItem={handleRenderAction}
      showsVerticalScrollIndicator={false}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.3}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    />
  );
};

export default OPNewsList;
