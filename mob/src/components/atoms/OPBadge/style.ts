import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.RED,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  text: {
    ...TextStyles.DOSIS_BOLD,
    color: Colors.WHITE,
    left: -0.5,
  },
});
