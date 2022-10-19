import React, {useRef} from 'react';
import {useTranslation} from 'react-i18next';

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import OPDonateForm from '../components/organisms/OPDonateForm/OPDonateForm';
import {Colors} from '../constants/Colors';
import Icons from '../constants/Icons';
import {TextStyles} from '../constants/TextStyles';
import {DonateScreenProps} from '../navigation/RootStackNavigator';
import {AppRoute} from '../navigation/Routes';

const DonateScreen: React.FC<DonateScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const scrollRef = useRef<any>(null);

  const handleScrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const handleGoBack = () => {
    navigation.navigate(AppRoute.TAB_NAVIGATOR);
  };

  return (
    <>
      <Shadow offset={[0, 2]} distance={2} stretch style={styles.shadowStyle}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            hitSlop={{top: 10, bottom: 10, left: 30, right: 30}}
            style={styles.icon}
            onPress={handleGoBack}>
            {Icons.ARROW_LEFT}
          </TouchableOpacity>
          <Text style={styles.heading}>
            {t('tabNavigator.donate').toUpperCase()}
          </Text>
        </View>
      </Shadow>
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
  subContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  content: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  scroll: {
    paddingBottom: 200,
    backgroundColor: Colors.WHITE,
  },
  shadowStyle: {
    zIndex: 1000,
    height: 50,
  },
  icon: {
    zIndex: 9999,
  },
  heading: {
    ...TextStyles.DOSIS_EXTRA_BOLD,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.DARK_GRAY,
    flexGrow: 1,
    textAlign: 'center',
    paddingRight: 24,
  },
});

export default DonateScreen;
