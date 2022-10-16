import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/Colors';
import {TextStyles} from '../../../../constants/TextStyles';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: {
    ...TextStyles.DOSIS_BOLD,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 12,
    alignSelf: 'flex-start',
    marginBottom: 4,
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
  },
  inputWrapper: {
    height: 58,
    width: 343,
    backgroundColor: 'transparent',
    borderColor: Colors.BG_LIGHT_GRAY,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  inputField: {
    ...TextStyles.ARCHIVO_REGULAR,
    fontSize: 14,
    lineHeight: 14,
    width: 327,
    height: Platform.OS === 'android' ? 40 : 20,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    textAlign: 'left',
  },
  focusedText: {
    ...TextStyles.ARCHIVO_REGULAR,
    fontSize: 14,
    lineHeight: 14,
    color: Colors.ORANGE,
    textAlign: 'left',
  },
  text: {
    ...TextStyles.ARCHIVO_REGULAR,
    color: Colors.LIGHTER_GRAY,
    textAlign: 'left',
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 9,
  },
  errorMessage: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 10,
    lineHeight: 10,
    color: Colors.RED_ERROR,
    marginVertical: 5,
    marginTop: 8,
    marginLeft: 3,
  },
  errorContainer: {
    height: 20,
  },
  textArea: {
    height: 131,
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
    textAlignVertical: 'top',
  },
});
