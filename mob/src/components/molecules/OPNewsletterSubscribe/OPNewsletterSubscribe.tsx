import {Text, View} from 'react-native';
import React from 'react';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';
import {styles} from './style';

const OPNewsletterSubscribe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Prijavite se!</Text>
      <Text style={styles.text}>
        Prijavom na naš newsletter dobijaćete obaveštenje o aktuelnim donacijama
        i načinima kako možete pomoći ugroženim porodicama
      </Text>

      {/* <FormikTextInput
        field={undefined}
        form={undefined}
        label={''}
        editable={false}
      /> */}
      <Text style={styles.heading}>FORMIK OVDE</Text>
      <OPPrimaryButton text={'PRIJAVA'} onPress={(): void => {}} />
    </View>
  );
};

export default OPNewsletterSubscribe;
