import React from 'react';
import {View, Image, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from '../../../constants/Icons';
import OPBadge from '../../atoms/OPBadge/OPBadge';
import OPSearch from '../../atoms/OPSearch/OPSearch';
import OPTagChips from '../../molecules/OPTagChips/OPTagChips';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';

import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <Image
          source={require('../../../../assets/images/LogoHoriz1.png')}
          resizeMode="contain"
        />
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => {}}>
            <View>{Icons.FILTER}</View>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
          <OPBadge value={1} />
        </View>
      </View>
      <View style={styles.bottomHeader}>
        <OPSearch placeholder="Pretrazi po ključnim rečima" />
        <Text style={styles.categoryText}>Kategorije</Text>
        <OPTagChips />
      </View>
      <View style={styles.buttonContainer}>
        <OPPrimaryButton text="PRETRAZI" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default Header;
