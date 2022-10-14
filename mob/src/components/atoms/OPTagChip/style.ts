import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {FontFamily} from '../../../constants/FontFamily';

export const styles = StyleSheet.create({
  tagChipSmall: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  tagChipLarge: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  tagChipDark: {
    borderWidth: 1,
  } as ViewStyle,
  tagChipLabel: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    color: Colors.WHITE,
    fontFamily: FontFamily.DOSIS_REGULAR,
  } as TextStyle,
});
