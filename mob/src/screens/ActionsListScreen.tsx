import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

const ActionsListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ActionsListScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  formik: {
    flex: 1,
  },
});

export default ActionsListScreen;
