import React from 'react';

import {AppRoute} from './Routes';
import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from '../screens/NewsScreen';
import NewsListScreen from '../screens/NewsListScreen';

import {newsScreenOptions, newsStackOptions} from './screenOptions';

const Stack = createStackNavigator();

const NewsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.NEWS_LIST_SCREEN}
      screenOptions={newsStackOptions}>
      <Stack.Screen
        name={AppRoute.NEWS_LIST_SCREEN}
        component={NewsListScreen}
      />
      <Stack.Screen
        name={AppRoute.NEWS_SCREEN}
        component={NewsScreen}
        options={newsScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default NewsNavigator;
