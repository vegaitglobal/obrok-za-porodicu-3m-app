import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {FontFamily} from '../constants/FontFamily';

const ActionsListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontFamily: FontFamily.CHEWY_REGULAR}}>
        Action List Screen
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ActionsListScreen;
