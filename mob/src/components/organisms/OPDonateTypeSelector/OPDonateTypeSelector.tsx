import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {getRandomColor} from '../../../utils/getRandomColor';
import OPTagChip from '../../atoms/OPTagChip/OPTagChip';
import {ActionType} from '../../../models/VolunteerAction/VolunteerActionDTO';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/reducers/RootReducer';
import {getVolunteerActionTypes} from '../../../store/actions/VolunteerAction';
import {useTranslation} from 'react-i18next';

interface OPDonateTypeSelectorProps {
  onSelect: (id: number) => void;
}

const OPDonateTypeSelector: React.FC<OPDonateTypeSelectorProps> = ({
  onSelect,
}) => {
  const {t} = useTranslation();
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
      <Text style={styles.text}>{t('donateScreen.chooseCategory')}</Text>
      <View style={styles.container}>{renderItems()}</View>
    </View>
  );
};

export default OPDonateTypeSelector;
