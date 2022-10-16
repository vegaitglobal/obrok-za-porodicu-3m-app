import crashlytics from '@react-native-firebase/crashlytics';
import NetInfo from '@react-native-community/netinfo';
export const logIfOnline = (error: any) => {
  NetInfo.fetch().then(networkState => {
    if (networkState.isConnected) {
      crashlytics().log(error.toString());
    }
  });
};
