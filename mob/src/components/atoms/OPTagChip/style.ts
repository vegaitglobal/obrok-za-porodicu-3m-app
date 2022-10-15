import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  tagChipSmall: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  } as ViewStyle,
  tagChipLarge: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  } as ViewStyle,
  tagChipLabel: {
    ...TextStyles.DOSIS_BOLD,
    color: Colors.WHITE,
  } as TextStyle,
});
