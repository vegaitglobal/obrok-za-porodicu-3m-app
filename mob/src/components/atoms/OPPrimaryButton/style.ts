import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.RED,
    paddingVertical: 20,
    borderRadius: 4,
  },
  disabledContainer: {
    opacity: 0.6,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 16,
  },
});
