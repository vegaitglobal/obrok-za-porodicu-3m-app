import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  text: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 15,
    color: Colors.RED,
    lineHeight: 15,
    textDecorationLine: 'underline',
  },
  icon: {
    marginLeft: 5,
  },
});
