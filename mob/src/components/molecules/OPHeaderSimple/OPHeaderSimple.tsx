import {View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';

const image = require('../../../../assets/images/LogoHoriz1.png');

const OPHeaderSimple: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.topHeader}>
        <Image source={image} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
};

export default OPHeaderSimple;
