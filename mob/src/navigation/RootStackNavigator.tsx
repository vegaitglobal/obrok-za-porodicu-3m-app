import React from 'react';

import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {AppRoute} from './Routes';

import {RouteProp} from '@react-navigation/native';
import DonateScreen from '../screens/DonateScreen';
import {donateScreenOptions} from './screenOptions';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator<RootStackNavigatorParams>();

export type RootStackNavigatorParams = {
  [AppRoute.TAB_NAVIGATOR]: undefined;
  [AppRoute.DONATE_SCREEN]: undefined;
};

export interface RootStackNavigatorProps<
  Screen extends keyof RootStackNavigatorParams,
> {
  navigation: StackNavigationProp<RootStackNavigatorParams, Screen>;
  route: RouteProp<RootStackNavigatorParams, Screen>;
}

export type DonateScreenProps = RootStackNavigatorProps<AppRoute.DONATE_SCREEN>;

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.TAB_NAVIGATOR}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppRoute.TAB_NAVIGATOR} component={TabNavigator} />
      <Stack.Screen
        name={AppRoute.DONATE_SCREEN}
        component={DonateScreen}
        options={donateScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
