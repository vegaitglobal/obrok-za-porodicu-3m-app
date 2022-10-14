import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';

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
    color: Colors.WHITE,
  } as TextStyle,
});
