import React from 'react';

import {AppRoute} from './Routes';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import NewsScreen from '../screens/NewsScreen';
import NewsListScreen from '../screens/NewsListScreen';

import {newsScreenOptions, newsStackOptions} from './screenOptions';
import {RouteProp} from '@react-navigation/native';

const Stack = createStackNavigator<NewsNavigatorParams>();

export interface NewsProps {
  newsId: number;
}

export type NewsNavigatorParams = {
  [AppRoute.NEWS_LIST_SCREEN]: undefined;
  [AppRoute.NEWS_SCREEN]: NewsProps;
};

export interface NewsNavigatorProps<Screen extends keyof NewsNavigatorParams> {
  navigation: StackNavigationProp<NewsNavigatorParams, Screen>;
  route: RouteProp<NewsNavigatorParams, Screen>;
}

export type NewsListScreenProps = NewsNavigatorProps<AppRoute.NEWS_LIST_SCREEN>;
export type NewsScreenProps = NewsNavigatorProps<AppRoute.NEWS_SCREEN>;

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
