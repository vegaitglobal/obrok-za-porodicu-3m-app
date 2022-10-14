import React from 'react';

import {AppRoute} from './Routes';
import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from '../screens/NewsListScreen';
import NewsListScreen from '../screens/NewsListScreen';

const Stack = createStackNavigator();

const NewsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AppRoute.NEWS_LIST_SCREEN}>
      <Stack.Screen
        name={AppRoute.NEWS_LIST_SCREEN}
        component={NewsListScreen}
        options={{
          headerShown: false,
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
