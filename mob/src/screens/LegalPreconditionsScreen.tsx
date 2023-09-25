import {Linking, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EULA_URL, PRIVACY_POLICY_URL} from '../constants/UrlConstants';
import {setIsOnboarded} from '../store/reducers/UserReducer';
import OPPrimaryButton from '../components/atoms/OPPrimaryButton/OPPrimaryButton';
import {Checkbox} from '../components/atoms/Checkbox';

export const LegalPreconditionsScreen = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch<any>();
  const [isEulaAccepted, setIsEulaAccepted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 30}}>
          Uslovi koriscenja i politika privatnosti
        </Text>
        <Text style={{fontSize: 14, paddingTop: 10}}>
          Molimo vas da pažljivo pročitate sledeće Uslove korišćenja kao i
          Politiku privatnosti.
        </Text>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => Linking.openURL(EULA_URL)}>
          <Text
            style={{
              color: Colors.BLUE,
              textDecorationLine: 'underline',
              fontSize: 16,
            }}>
            {'Uslovi korišćenja (EULA)'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}>
          <Text
            style={{
              color: Colors.BLUE,
              textDecorationLine: 'underline',
              fontSize: 16,
            }}>
            {'Politika privatnosti'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Checkbox
            isChecked={isEulaAccepted}
            onCheckStateChange={isChecked => setIsEulaAccepted(isChecked)}
          />
          <Text style={{paddingStart: 10}}>Prihvatam uslove korišćenja</Text>
        </View>

        <OPPrimaryButton
          text="Nastavi"
          disabled={!isEulaAccepted}
          onPress={() => dispatch(setIsOnboarded())}
          style={{width: '100%'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 30,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.WHITE,
  },
});
