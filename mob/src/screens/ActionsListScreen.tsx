import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {TextStyles} from '../constants/TextStyles';

const ActionsListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.a}>Action List Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  a: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 20,
  },
});

export default ActionsListScreen;
