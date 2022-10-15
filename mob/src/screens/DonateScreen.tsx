/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import OPDonateForm from '../components/organisms/OPDonateForm/OPDonateForm';
import {Colors} from '../constants/Colors';

const DonateScreen = () => {
  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}>
      <OPDonateForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: '100%',
    paddingTop: 100,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 200,
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  scroll: {
    paddingBottom: 200,
    backgroundColor: Colors.WHITE,
  },
});

export default DonateScreen;
