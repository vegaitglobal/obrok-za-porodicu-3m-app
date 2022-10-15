import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import OPTagChip from '../../atoms/OPTagChip/OPTagChip';
import {VolunteerActionStatus} from '../../../models/VolunteerAction/VolunteerActionStatus';
import {getRandomColor} from '../../../utils/getRandomColor';
import {useSelector, useDispatch} from 'react-redux';
import {setAppliedFilters} from '../../../store/actions/VolunteerAction';
import type {RootState, AppDispatch} from '../../../store/reducers/RootReducer';
interface OPTagChipsProps {
  statuses?: VolunteerActionStatus[];
}

const volunteerActions: string | any[] = [
  {
    id: 1,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 2,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 3,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 4,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 5,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 6,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
  {
    id: 7,
    name: 'Novac',
    hasPickup: false,
    hasPayment: true,
  },
  {
    id: 8,
    name: 'Odeća i obuća',
    hasPickup: true,
    hasPayment: false,
  },
];

const OPTagChips: React.FC<OPTagChipsProps> = ({
  statuses = volunteerActions,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector(
    (state: RootState) => state.volunteerActions.appliedVolunteerActions,
  );

  const onPress = (status: VolunteerActionStatus, color: string) =>
    dispatch(setAppliedFilters(status, color));

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

  return <View style={styles.container}>{renderItems()}</View>;
};

export default OPTagChips;
