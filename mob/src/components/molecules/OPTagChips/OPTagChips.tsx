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

const OPTagChips: React.FC<OPTagChipsProps> = ({statuses}) => {
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
