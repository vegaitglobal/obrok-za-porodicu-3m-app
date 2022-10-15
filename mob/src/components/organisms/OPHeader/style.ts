import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {},
  topHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  categoryText: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    color: Colors.BLACK,
    marginTop: 16,
    marginBottom: 13,
    fontSize: 18,
  },
  buttonContainer: {
    paddingHorizontal: 16,
  },
});
