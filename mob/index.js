import React from 'react';

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import './src/translations/i18n';

import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store/Store';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load REAModule']);

const AppComponent = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppComponent);
