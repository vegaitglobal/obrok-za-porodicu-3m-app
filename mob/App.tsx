import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import TabNavigator from './src/navigation/TabNavigator';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducers/RootReducer';
import {OnboardingNavigator} from './src/navigation/OnboardingNavigator';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/toastConfig';

import OPMessengerFloater from './src/components/atoms/OPMessengerFloater/OPMessengerFloater';

const App = () => {
  const {isOnboarded} = useSelector((state: RootState) => state.user);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <StatusBar barStyle={'dark-content'} />

      {isOnboarded ? (
        <>
          <TabNavigator />
          <OPMessengerFloater />
          <Toast config={toastConfig} position={'bottom'} bottomOffset={0} />
        </>
      ) : (
        <OnboardingNavigator />
      )}
    </NavigationContainer>
  );
};

export default App;
