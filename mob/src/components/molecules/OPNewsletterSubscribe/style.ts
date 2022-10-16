import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    padding: 16,
  } as ViewStyle,
  heading: {
    ...TextStyles.CHEWY_REGULAR,
    textAlign: 'center',
    fontSize: 18,
    color: Colors.BROWN,
    paddingBottom: 16,
  } as TextStyle,
  text: {
    ...TextStyles.DOSIS_REGULAR,
    textAlign: 'center',
    fontSize: 14,
    color: Colors.DARK_GRAY,
    paddingHorizontal: 10,
  } as TextStyle,
  button: {
    marginTop: 10,
    width: '90%',
  },
  formik: {
    alignItems: 'center',
  },
});
