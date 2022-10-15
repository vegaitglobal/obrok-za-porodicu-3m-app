import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  textContainer: {
    marginHorizontal: 16,
    marginVertical: 4,
  } as ViewStyle,
  textHeading: {...TextStyles.DOSIS_EXTRA_BOLD, size: 18} as TextStyle,
  textContent: {...TextStyles.DOSIS_REGULAR, size: 16} as TextStyle,
});
