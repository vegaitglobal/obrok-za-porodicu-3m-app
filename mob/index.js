/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import './src/translations/i18n';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
