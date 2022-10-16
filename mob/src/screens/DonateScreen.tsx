import React from 'react';
import {useTranslation} from 'react-i18next';

import {ScrollView, StyleSheet} from 'react-native';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import OPDonateForm from '../components/organisms/OPDonateForm/OPDonateForm';
import OPHeader from '../components/organisms/OPHeader/OPHeader';
import {Colors} from '../constants/Colors';

const DonateScreen = () => {
  const {t} = useTranslation();
  return (
    <>
      <OPHeader hasFilter={false} />
      <OPSubheader heading={t('tabNavigator.donate')} />
      <ScrollView
        bounces={false}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <OPDonateForm />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: '100%',
  },
  content: {
    flexGrow: 1,
    paddingBottom: 100,
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
