import React from 'react';

import {AppRoute} from './Routes';
import {createStackNavigator} from '@react-navigation/stack';

import ActionsListScreen from '../screens/ActionsListScreen';
import ActionScreen from '../screens/ActionScreen';

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
