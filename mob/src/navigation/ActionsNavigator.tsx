import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {AppRoute} from './Routes';

import ActionScreen from '../screens/ActionScreen';
import ActionsListScreen from '../screens/ActionsListScreen';

import Header from '../components/organisms/OPHeader/OPHeader';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  header: () => <Header />,
};

const ActionsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.ACTIONS_LIST_SCREEN}
      screenOptions={screenOptions}>
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
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default ActionsNavigator;
