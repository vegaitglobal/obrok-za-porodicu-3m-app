import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  shadowStyle: {
    zIndex: 1000,
  },
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  } as ViewStyle,
  rowContainer: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexGrow: 1,
  } as ViewStyle,
  heading: {
    ...TextStyles.DOSIS_EXTRA_BOLD,
    fontSize: 18,
    fontWeight: '800',
    color: Colors.DARK_GRAY,
  } as TextStyle,
  headingMargin: {
    marginLeft: 16,
  } as TextStyle,
  dropdownLabels: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.DARK_GRAY,
  } as TextStyle,
  placeholder: {
    textAlign: 'right',
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.LIGHT_GRAY,
  } as TextStyle,
  dropdownMainLabel: {textAlign: 'right'} as TextStyle,
  picker: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: 200,
  } as ViewStyle,
  pickerDropdown: {
    backgroundColor: Colors.BACKGROUND,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.LIGHTER_GRAY,
  } as ViewStyle,
  placeholderStyle: {
    textAlign: 'right',
  } as ViewStyle,
  separator: {
    height: 0.5,
    backgroundColor: Colors.LIGHTER_GRAY,
  },
});
