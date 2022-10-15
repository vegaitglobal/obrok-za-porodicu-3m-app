import React from 'react';

import {AppRoute} from './Routes';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import NewsScreen from '../screens/NewsListScreen';
import NewsListScreen from '../screens/NewsListScreen';

import Header from '../components/organisms/OPHeader/OPHeader';

const Stack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
  header: () => <Header />,
};

const NewsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.NEWS_LIST_SCREEN}
      screenOptions={screenOptions}>
      <Stack.Screen
        name={AppRoute.NEWS_LIST_SCREEN}
        component={NewsListScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={AppRoute.NEWS_SCREEN}
        component={NewsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigator;
