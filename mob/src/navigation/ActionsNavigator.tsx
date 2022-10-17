import React from 'react';

import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {AppRoute} from './Routes';

import ActionScreen from '../screens/ActionScreen';
import ActionsListScreen from '../screens/ActionsListScreen';

import {actionScreenOptions, actionsStackOptions} from './screenOptions';
import {RouteProp} from '@react-navigation/native';

const Stack = createStackNavigator<ActionsNavigatorParams>();

export interface ActionRouteProps {
  actionId: number;
}

export type ActionsNavigatorParams = {
  [AppRoute.ACTIONS_LIST_SCREEN]: undefined;
  [AppRoute.ACTION_SCREEN]: ActionRouteProps;
};

export interface ActionNavigatorProps<
  Screen extends keyof ActionsNavigatorParams,
> {
  navigation: StackNavigationProp<ActionsNavigatorParams, Screen>;
  route: RouteProp<ActionsNavigatorParams, Screen>;
}

export type ActionListScreenProps =
  ActionNavigatorProps<AppRoute.ACTIONS_LIST_SCREEN>;
export type ActionScreenProps = ActionNavigatorProps<AppRoute.ACTION_SCREEN>;

const ActionsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.ACTIONS_LIST_SCREEN}
      screenOptions={actionsStackOptions}>
      <Stack.Screen
        name={AppRoute.ACTIONS_LIST_SCREEN}
        component={ActionsListScreen}
      />
      <Stack.Screen
        name={AppRoute.ACTION_SCREEN}
        component={ActionScreen}
        options={actionScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default ActionsNavigator;
