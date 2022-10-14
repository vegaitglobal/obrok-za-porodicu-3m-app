import {StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.BG_LIGHT_GRAY,
    paddingHorizontal: 16,
    paddingVertical: 12,
  } as ViewStyle,
  input: {
    ...TextStyles.DOSIS_REGULAR,
    color: Colors.LIGHTER_GRAY,
    marginLeft: 8,
  } as ViewStyle,
});
