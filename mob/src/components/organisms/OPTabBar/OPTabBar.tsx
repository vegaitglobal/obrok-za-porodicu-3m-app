import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppRoute} from '../../../navigation/Routes';
import i18n from '../../../translations/i18n';
import OPDonateButton from '../../atoms/OPDonateButton/OPDonateButton';
import OPTabIcon from '../../atoms/OPTabIcon/OPTabIcon';
import {styles} from './style';

export type TabType = 'home' | 'news' | 'donate' | 'about_us' | 'contact';

const OPTabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const {bottom} = useSafeAreaInsets();

  const onPress = (route: AppRoute) => {
    navigation.navigate(route);
  };

  return (
    <View style={[styles.container, {paddingBottom: bottom - 14}]}>
      <View style={styles.leftCoupleButtons}>
        <TouchableOpacity
          onPress={() => onPress(AppRoute.ACTIONS_NAVIGATOR)}
          style={styles.tabButton}>
          <OPTabIcon
            focused={state.index === 0}
            text={i18n.t('tabNavigator.home')}
            type={'home'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPress(AppRoute.NEWS_NAVIGATOR)}
          style={styles.tabButton}>
          <OPTabIcon
            focused={state.index === 1}
            text={i18n.t('tabNavigator.news')}
            type={'news'}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onPress(AppRoute.DONATE_SCREEN)}
        style={styles.donateButton}>
        <OPDonateButton focused text={i18n.t('tabNavigator.donate')} />
      </TouchableOpacity>
      <View style={styles.rightCoupleButtons}>
        <TouchableOpacity
          onPress={() => onPress(AppRoute.ABOUT_US_SCREEN)}
          style={styles.tabButton}>
          <OPTabIcon
            focused={state.index === 2}
            text={i18n.t('tabNavigator.about_us')}
            type={'about_us'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPress(AppRoute.CONTACT_SCREEN)}
          style={styles.tabButton}>
          <OPTabIcon
            focused={state.index === 3}
            text={i18n.t('tabNavigator.contact')}
            type={'contact'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OPTabBar;
