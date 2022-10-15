import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  } as ViewStyle,
  heading: {
    ...TextStyles.DOSIS_EXTRA_BOLD,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.DARK_GRAY,
    marginLeft: 16,
  } as TextStyle,
  dropdownLabels: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.DARK_GRAY,
  } as TextStyle,
  dropdownMainLabel: {textAlign: 'right'} as TextStyle,
  picker: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: 200,
  } as ViewStyle,
  pickerDropdown: {
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
  } as ViewStyle,
});
