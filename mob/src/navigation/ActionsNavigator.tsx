import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute} from './Routes';

import ActionScreen from '../screens/ActionScreen';
import ActionsListScreen from '../screens/ActionsListScreen';

import {actionScreenOptions, actionsStackOptions} from './screenOptions';

const Stack = createStackNavigator();

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
