import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.RED,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    paddingTop: -5,
  },
  text: {
    ...TextStyles.DOSIS_BOLD,
    fontSize: 12,
    color: Colors.RED,
    textTransform: 'uppercase',
    marginTop: 5,
  },
  focusedContainer: {
    borderColor: Colors.WHITE,
    backgroundColor: Colors.RED,
  },
  focusedText: {
    color: Colors.WHITE,
  },
});
