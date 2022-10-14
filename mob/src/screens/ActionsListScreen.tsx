import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {TextStyles} from '../constants/TextStyles';

const ActionsListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{...TextStyles.ARCHIVO_SEMI_BOLD}}>Action List Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ActionsListScreen;
