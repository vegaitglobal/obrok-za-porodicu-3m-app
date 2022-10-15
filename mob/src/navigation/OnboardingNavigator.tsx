import React from 'react';
import {AppRoute} from './Routes';

import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';

export type OnboardingNavigatorParams = {
  [AppRoute.ONBOARDING_SCREEN]: undefined;
};
const Stack = createStackNavigator();

export const OnboardingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoute.ONBOARDING_SCREEN}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name={AppRoute.ONBOARDING_SCREEN}
        component={OnboardingScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
