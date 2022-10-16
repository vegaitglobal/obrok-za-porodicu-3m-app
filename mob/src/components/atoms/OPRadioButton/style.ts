import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -6,
  },
  whiteCircle: {
    borderRadius: 100,
    backgroundColor: 'transparent',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: Colors.RED,
  },
  deselectedBorder: {
    borderWidth: 2,
    borderColor: Colors.DARK_GRAY,
  },
  selected: {
    borderRadius: 100,
    backgroundColor: Colors.RED,
    width: 10,
    height: 10,
    alignSelf: 'center',
  },
  text: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 16,
    lineHeight: 16,
    marginLeft: '8%',
  },
});
