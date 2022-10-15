import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import TabNavigator from './src/navigation/TabNavigator';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <StatusBar barStyle={'dark-content'} />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
