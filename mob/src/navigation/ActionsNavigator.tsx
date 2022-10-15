import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute} from './Routes';

import ActionScreen from '../screens/ActionScreen';
import ActionsListScreen from '../screens/ActionsListScreen';

const Stack = createStackNavigator();

const ActionsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AppRoute.ACTIONS_LIST_SCREEN}>
      <Stack.Screen
        name={AppRoute.ACTIONS_LIST_SCREEN}
        component={ActionsListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={AppRoute.ACTION_SCREEN}
        component={ActionScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ActionsNavigator;
