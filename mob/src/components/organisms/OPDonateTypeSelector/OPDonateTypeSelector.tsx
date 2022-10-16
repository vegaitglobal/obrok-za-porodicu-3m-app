import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {getRandomColor} from '../../../utils/getRandomColor';
import OPTagChip from '../../atoms/OPTagChip/OPTagChip';
import {ActionType} from '../../../models/VolunteerAction/VolunteerActionDTO';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/reducers/RootReducer';
import {getVolunteerActionTypes} from '../../../store/actions/VolunteerAction';
import Icons from '../../../constants/Icons';

interface OPDonateTypeSelectorProps {
  onSelect: (id: number) => void;
  hasError?: boolean;
}

const OPDonateTypeSelector: React.FC<OPDonateTypeSelectorProps> = ({
  onSelect,
  hasError = false,
}) => {
  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getVolunteerActionTypes());
  }, [dispatch]);

  const {volunteerActionTypes} = useSelector(
    (state: RootState) => state.volunteerActions,
  );
  const onPress = (value: any) => {
    setSelected(value.id);
    onSelect(value.id);
  };
  const renderItems = () =>
    volunteerActionTypes &&
    volunteerActionTypes.map((item: ActionType, index: number) => (
      <View key={item.id.toString()} style={styles.tagContainer}>
        <OPTagChip
          volunteerAction={item}
          color={getRandomColor(index)}
          size="large"
          onPress={onPress}
          fill={selected === item.id}
        />
        <View style={styles.divider} />
      </View>
    ));

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>Odaberite Kategoriju</Text>
        {hasError && Icons.RED_WARNING}
      </View>

      <View style={styles.container}>{renderItems()}</View>
    </View>
  );
};

export default OPDonateTypeSelector;
