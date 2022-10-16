import {View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';

const LOGO_IMAGE = require('../../../../assets/images/LogoHoriz1.png');

const OPHeaderSimple: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <Image source={LOGO_IMAGE} resizeMode="contain" />
      </View>
    </SafeAreaView>
  );
};

export default OPHeaderSimple;
