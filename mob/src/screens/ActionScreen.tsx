import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

const ActionScreen = ({route}) => {
  console.log(route);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Action Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ActionScreen;
