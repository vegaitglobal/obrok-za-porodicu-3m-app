import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
  },
  tagContainer: {
    marginBottom: 8,
    flexDirection: 'row',
  },
  text: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    color: Colors.BLACK,
    marginTop: 16,
    marginBottom: 13,
    fontSize: 18,
  },
  divider: {
    width: 8,
  },
});
