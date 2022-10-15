import React, {FC, useState} from 'react';
import {View, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '../../../constants/Icons';
import OPBadge from '../../atoms/OPBadge/OPBadge';
import OPSearch from '../../atoms/OPSearch/OPSearch';
import OPTagChips from '../../molecules/OPTagChips/OPTagChips';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';
import {useSelector} from 'react-redux';
import type {RootState} from '../../../store/reducers/RootReducer';

import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface OPHeaderProps {
  filterTitle: string;
}

const OPHeader: FC<OPHeaderProps> = ({filterTitle = 'Kategorije'}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const filters = useSelector(
    (state: RootState) => state.volunteerActions.appliedVolunteerActions,
  );
  const badgeValue: number =
    Object.keys(filters).length + +(searchValue?.length > 0 ? 1 : 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <Image
          source={require('../../../../assets/images/LogoHoriz1.png')}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.filterContainer} onPress={() => {}}>
          <View>{Icons.FILTER}</View>
          <Text style={styles.filterText}>Filter</Text>
          {badgeValue && <OPBadge value={badgeValue} />}
        </TouchableOpacity>
      </View>
      <View style={styles.bottomHeader}>
        <OPSearch
          placeholder="Pretrazi po ključnim rečima"
          value={searchValue}
          onChangeText={(value: string) => setSearchValue(value)}
        />
        <Text style={styles.categoryText}>{filterTitle}</Text>
        <OPTagChips />
      </View>
      <View style={styles.buttonContainer}>
        <OPPrimaryButton text="PRETRAZI" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default OPHeader;
