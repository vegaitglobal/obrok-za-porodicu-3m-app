import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {VolunteerActionDTO} from '../../../models/VolunteerAction/VolunteerActionDTO';
import OPActionListItem from '../../molecules/OPActionListItem/OPActionListItem';
import {styles} from './style';

interface OPActionsListProps {
  actions: Array<VolunteerActionDTO>;
  onPress: (id: number) => void;
}

const OPActionsList: React.FC<OPActionsListProps> = ({actions, onPress}) => {
  const handleRenderAction = ({
    item,
    index,
  }: ListRenderItemInfo<VolunteerActionDTO>) => {
    return <OPActionListItem key={index} action={item} onPress={onPress} />;
  };
  return (
    <FlatList
      data={actions}
      style={styles.container}
      contentContainerStyle={styles.content}
      renderItem={handleRenderAction}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default OPActionsList;
