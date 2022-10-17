import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import messaging from '@react-native-firebase/messaging';

import TabNavigator from './src/navigation/TabNavigator';
import {StatusBar, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducers/RootReducer';
import {OnboardingNavigator} from './src/navigation/OnboardingNavigator';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/toastConfig';

import OPMessengerFloater from './src/components/atoms/OPMessengerFloater/OPMessengerFloater';
import {logScreen} from './src/utils/analytics';
import {AppRoute} from './src/navigation/Routes';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NotificationToast} from './src/components/organisms/OPNotificationToast/Notification';

const App = () => {
  const routeNameRef = useRef<string>();
  const navigationRef = useRef<any>();
  const {isOnboarded} = useSelector((state: RootState) => state.user);

  async function requestUserPermission() {
    await messaging().requestPermission();
  }

  useEffect(() => {
    requestUserPermission();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          RNBootSplash.hide({fade: true});
          routeNameRef.current = navigationRef.current?.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName =
            navigationRef.current?.getCurrentRoute().name;

          if (previousRouteName !== currentRouteName) {
            logScreen(currentRouteName);
          }
          routeNameRef.current = currentRouteName;
        }}>
        <StatusBar barStyle={'dark-content'} />

        {isOnboarded ? (
          <>
            <TabNavigator />
            {navigationRef.current?.getCurrentRoute().name !==
              AppRoute.DONATE_SCREEN && <OPMessengerFloater />}
            <Toast config={toastConfig} position={'bottom'} bottomOffset={0} />
          </>
        ) : (
          <OnboardingNavigator />
        )}
      </NavigationContainer>
      <NotificationToast />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
