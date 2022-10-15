import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/Colors';
import {TextStyles} from '../../../constants/TextStyles';

export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  mainView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  locationContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 50,
  },
  locationTitle: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 18,
    lineHeight: 18,
    color: Colors.LIGHT_GRAY,
    marginBottom: 15,
  },
  locationBody: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 24,
    lineHeight: 24,
    color: Colors.BLACK,
    marginBottom: 10,
  },
  phoneNumber: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 24,
    lineHeight: 24,
    color: Colors.RED,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  paymentDataContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 50,
  },
  subtitle: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 12,
    lineHeight: 12,
    color: Colors.LIGHT_GRAY,
    marginBottom: 10,
    marginTop: 15,
  },
  paymentDataBody: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 18,
    lineHeight: 18,
    color: Colors.BLACK,
    marginBottom: 5,
  },
});
