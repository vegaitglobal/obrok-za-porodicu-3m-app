import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.RED,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  text: {
    fontSize: 12,
    color: Colors.RED,
    textTransform: 'uppercase',
  },
  focusedContainer: {
    borderColor: Colors.WHITE,
    backgroundColor: Colors.RED,
  },
  focusedText: {
    color: Colors.WHITE,
  },
});
