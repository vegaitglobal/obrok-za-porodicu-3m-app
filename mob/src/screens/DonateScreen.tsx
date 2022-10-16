import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';

import {ScrollView, StyleSheet} from 'react-native';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import OPDonateForm from '../components/organisms/OPDonateForm/OPDonateForm';
import OPHeader from '../components/organisms/OPHeader/OPHeader';
import {Colors} from '../constants/Colors';

const DonateScreen = () => {
  const {t} = useTranslation();
  const scrollRef = useRef<any>(null);

  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <>
      <OPHeader hasFilter={false} />
      <OPSubheader heading={t('tabNavigator.donate')} showDropdown={false} />
      <ScrollView
        ref={scrollRef}
        bounces={false}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <OPDonateForm onScrollToTop={handleScrollToTop} />
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
