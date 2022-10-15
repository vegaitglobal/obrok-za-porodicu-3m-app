import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

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
    ...TextStyles.DOSIS_EXTRA_BOLD,
    color: Colors.WHITE,
    fontSize: 16,
  },
});
