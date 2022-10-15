import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppRoute} from './Routes';

import ActionsNavigator from './ActionsNavigator';
import NewsNavigator from './NewsNavigator';

import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import OPTabIcon from '../components/atoms/OPTabIcon/OPTabIcon';
import AboutUsScreen from '../screens/AboutUsScreen';
import ContactScreen from '../screens/ContactScreen';
import DonateScreen from '../screens/DonateScreen';

const BottomTab = createBottomTabNavigator();

import OPHeader from '../components/organisms/OPHeader/OPHeader';

export type TabType = 'home' | 'news' | 'donate' | 'about_us' | 'contact';

const TabNavigator = () => {
  const {t} = useTranslation();

  const screenOptions = {
    header: () => <OPHeader />,
    title: '',
    tabBarStyle: styles.container,
  };

  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      initialRouteName={AppRoute.ACTIONS_NAVIGATOR}>
      <BottomTab.Screen
        name={AppRoute.ACTIONS_NAVIGATOR}
        component={ActionsNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <OPTabIcon
                text={t('tabNavigator.home')}
                focused={focused}
                type={'home'}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={AppRoute.NEWS_NAVIGATOR}
        component={NewsNavigator}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <OPTabIcon
                text={t('tabNavigator.news')}
                focused={focused}
                type={'news'}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={AppRoute.DONATE_SCREEN}
        component={DonateScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <OPTabIcon
                text={t('tabNavigator.donate')}
                focused={!focused}
                type={'donate'}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={AppRoute.ABOUT_US_SCREEN}
        component={AboutUsScreen}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <OPTabIcon
                text={t('tabNavigator.about_us')}
                focused={focused}
                type={'about_us'}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={AppRoute.CONTACT_SCREEN}
        component={ContactScreen}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <OPTabIcon
                text={t('tabNavigator.contact')}
                focused={focused}
                type={'contact'}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    paddingHorizontal: 20,
  },
});

export default TabNavigator;
