import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import OPTagChip from '../../atoms/OPTagChip/OPTagChip';
import {ActionType} from '../../../models/VolunteerAction/VolunteerActionDTO';
import {getRandomColor} from '../../../utils/getRandomColor';
import {useSelector, useDispatch} from 'react-redux';
import {setAppliedFilters} from '../../../store/actions/VolunteerAction';
import type {RootState, AppDispatch} from '../../../store/reducers/RootReducer';
interface OPTagChipsProps {
  statuses?: ActionType[];
  heading?: string;
}

const OPTagChips: React.FC<OPTagChipsProps> = ({statuses, heading}) => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(
    (state: RootState) => state.volunteerActions.appliedVolunteerActions,
  );

  const onPress = (status: ActionType | string, color: string) => {
    if (typeof status !== 'string') {
      dispatch(setAppliedFilters(status, color));
    }
  };

  const renderItems = () =>
    statuses &&
    statuses.map((item, index) => (
      <View key={item.id.toString()} style={styles.tagContainer}>
        <OPTagChip
          volunteerAction={item}
          color={getRandomColor(index)}
          size="large"
          onPress={onPress}
          fill={Boolean(filters[item.id])}
        />
        <View style={styles.divider} />
      </View>
    ));

  return (
    <View>
      <Text style={styles.text}>{heading}</Text>
      <View style={styles.container}>{renderItems()}</View>
    </View>
  );
};

export default OPTagChips;
