import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  image: {
    height: 200,
    width: 200,
  },
  text: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 16,
    color: Colors.LIGHT_GRAY,
  },
});
