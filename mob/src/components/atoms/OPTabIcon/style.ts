import {StyleSheet} from 'react-native';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    height: 24,
    width: 24,
  },
  text: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 12,
    textTransform: 'uppercase',
    lineHeight: 30,
  },
});
