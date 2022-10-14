import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Search from '../components/atoms/Search/Search';

const ActionsListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Action List Screen</Text>
      <Search />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ActionsListScreen;
