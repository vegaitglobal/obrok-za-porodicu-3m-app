import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';
import {VolunteerActionDTO} from '../../../models/VolunteerAction/VolunteerActionDTO';
import OPActionListItem from '../../molecules/OPActionListItem/OPActionListItem';
import {styles} from './style';

interface OPActionsListProps {
  actions: Array<VolunteerActionDTO>;
  onPress: (id: number) => void;
  onRefresh: () => void;
  onLoadMore: () => void;
}

const OPActionsList: React.FC<OPActionsListProps> = ({
  actions,
  onPress,
  onRefresh,
  onLoadMore,
}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRenderAction = ({
    item,
    index,
  }: ListRenderItemInfo<VolunteerActionDTO>) => {
    return <OPActionListItem key={index} action={item} onPress={onPress} />;
  };

  const handleRefresh = () => {
    setRefreshing(true);
    onRefresh();
    setRefreshing(false);
  };

  return (
    <FlatList
      data={actions}
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

export default OPActionsList;
