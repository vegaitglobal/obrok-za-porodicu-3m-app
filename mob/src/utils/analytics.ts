import analytics from '@react-native-firebase/analytics';
import {AppRoute} from '../navigation/Routes';

export const logScreen = async (screenName: AppRoute) => {
  await analytics().logEvent('screen_visit', {
    screen_id: screenName,
  });
};
