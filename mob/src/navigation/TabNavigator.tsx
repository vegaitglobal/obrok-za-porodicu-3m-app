import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {AppRoute} from './Routes';

import ActionsNavigator from './ActionsNavigator';
import NewsNavigator from './NewsNavigator';

import AboutUsScreen from '../screens/AboutUsScreen';
import ContactScreen from '../screens/ContactScreen';

import OPTabBar from '../components/organisms/OPTabBar/OPTabBar';
import {
  aboutUseScreenOptions,
  actionsScreenOptions,
  contactScreenOptions,
  defaultTabBarSreenOptions,
  newsStackScreenOptions,
} from './screenOptions';

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTab.Navigator
    screenOptions={defaultTabBarSreenOptions}
    tabBar={(props: BottomTabBarProps) => <OPTabBar {...props} />}
    initialRouteName={AppRoute.ACTIONS_NAVIGATOR}>
    <BottomTab.Screen
      name={AppRoute.ACTIONS_NAVIGATOR}
      component={ActionsNavigator}
      options={actionsScreenOptions}
    />
    <BottomTab.Screen
      name={AppRoute.NEWS_NAVIGATOR}
      component={NewsNavigator}
      options={newsStackScreenOptions}
    />
    <BottomTab.Screen
      name={AppRoute.ABOUT_US_SCREEN}
      component={AboutUsScreen}
      options={aboutUseScreenOptions}
    />
    <BottomTab.Screen
      name={AppRoute.CONTACT_SCREEN}
      component={ContactScreen}
      options={contactScreenOptions}
    />
  </BottomTab.Navigator>
);

export default TabNavigator;
