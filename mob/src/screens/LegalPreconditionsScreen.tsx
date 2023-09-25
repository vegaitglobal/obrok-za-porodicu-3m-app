import {Linking, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EULA_URL, PRIVACY_POLICY_URL} from '../constants/UrlConstants';
import {setIsOnboarded} from '../store/reducers/UserReducer';
import OPPrimaryButton from '../components/atoms/OPPrimaryButton/OPPrimaryButton';

export const LegalPreconditionsScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch<any>();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 30}}>
          Uslovi koriscenja i politika privatnosti
        </Text>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => Linking.openURL(EULA_URL)}>
          <Text>EULA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}>
          <Text>Politika privatnosti</Text>
        </TouchableOpacity>
      </View>

      <OPPrimaryButton
        text="Kontinju"
        onPress={() => dispatch(setIsOnboarded())}
        style={{width: '90%'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 30,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.WHITE,
  },
});
