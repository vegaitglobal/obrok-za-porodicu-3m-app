
import React from 'react';

import { AppRoute } from './Routes';
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import ActionsNavigator from './ActionsNavigator';
import NewsNavigator from './NewsNavigator';

import AboutUsScreen from '../screens/AboutUsScreen';
import ContactScreen from '../screens/ContactScreen';
import DonateScreen from '../screens/DonateScreen';
import { useTranslation } from 'react-i18next';
  
const BottomTab = createBottomTabNavigator();
  
const TabNavigator = () => {
  const { t, i18n } = useTranslation();

  return (
    <BottomTab.Navigator
      initialRouteName={AppRoute.ACTIONS_NAVIGATOR}>
      <BottomTab.Screen
        name={AppRoute.ACTIONS_NAVIGATOR}
        component={ActionsNavigator}
        options={{
          tabBarLabel: t('tabNavigator.home'),
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name={AppRoute.NEWS_NAVIGATOR}
        component={NewsNavigator}
        options={{
          tabBarLabel: t('tabNavigator.news'),
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name={AppRoute.DONATE_SCREEN}
        component={DonateScreen}
        options={{
          tabBarLabel: t('tabNavigator.donate'),
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name={AppRoute.ABOUT_US_SCREEN}
        component={AboutUsScreen}
        options={{
          tabBarLabel: t('tabNavigator.about_us'),
          headerShown: false
        }}
      />
      <BottomTab.Screen
        name={AppRoute.CONTACT_SCREEN}
        component={ContactScreen}
        options={{
          tabBarLabel: t('tabNavigator.contact'),
          headerShown: false
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
