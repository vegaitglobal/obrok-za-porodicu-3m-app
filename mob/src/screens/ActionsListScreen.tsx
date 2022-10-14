import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import OPCarousel from '../components/molecules/OPCarousel/OPCarousel';
import {FontFamily} from '../constants/FontFamily';

const ActionsListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontFamily: FontFamily.CHEWY_REGULAR}}>
        Action List Screen
      </Text>
      <OPCarousel />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ActionsListScreen;
