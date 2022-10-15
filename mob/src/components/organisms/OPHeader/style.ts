import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND,
  },
  topHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  bottomHeader: {
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterText: {
    ...TextStyles.DOSIS_REGULAR,
    alignSelf: 'center',
    marginLeft: 2,
    marginRight: 4,
    fontSize: 18,
  },
  animationWrapper: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    paddingHorizontal: 16,
  },
});
