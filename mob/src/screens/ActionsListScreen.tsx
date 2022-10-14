import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {FontFamily} from '../constants/FontFamily';
import Search from '../components/atoms/Search/Search';

const ActionsListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontFamily: FontFamily.CHEWY_REGULAR}}>
        Action List Screen
      </Text>
      <Search />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ActionsListScreen;
