import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';
import {VolunteerActionDTO} from '../../../models/VolunteerAction/VolunteerActionDTO';
import OPActionListItem from '../../molecules/OPActionListItem/OPActionListItem';
import OPEmptyListState from '../../molecules/OPEmptyListState/OPEmptyListState';
import {styles} from './style';

interface OPActionsListProps {
  actions: Array<VolunteerActionDTO>;
  activeSort?: number;
  onPress: (id: number) => void;
  onRefresh: () => void;
  onLoadMore: () => void;
  onAddToFavourites: (action: VolunteerActionDTO) => void;
  onRemoveFromFavourites: (id: number) => void;
}

const OPActionsList: React.FC<OPActionsListProps> = ({
  actions,
  activeSort = -1,
  onPress,
  onRefresh,
  onLoadMore,
  onAddToFavourites,
  onRemoveFromFavourites,
}) => {
  const {t} = useTranslation();
  const listRef = useRef<FlatList>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleRenderAction = ({
    item,
    index,
  }: ListRenderItemInfo<VolunteerActionDTO>) => {
    return (
      <OPActionListItem
        key={index}
        action={item}
        onPress={onPress}
        onAddToFavourites={onAddToFavourites}
        onRemoveFromFavourites={onRemoveFromFavourites}
      />
    );
  };

  useEffect(() => {
    listRef.current?.scrollToOffset({animated: true, offset: 0});
  }, [activeSort]);

  const handleRefresh = () => {
    setRefreshing(true);
    onRefresh();
    setRefreshing(false);
  };

  const handleEndReached = () => {
    if (activeSort !== 0) {
      onLoadMore();
    }
  };

  return (
    <FlatList
      ref={listRef}
      data={actions}
      style={styles.container}
      contentContainerStyle={styles.content}
      renderItem={handleRenderAction}
      showsVerticalScrollIndicator={false}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.3}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      ListEmptyComponent={() => (
        <OPEmptyListState text={t('actionsList.empty_list')} />
      )}
    />
  );
};

export default OPActionsList;
