import {Text, View} from 'react-native';
import React from 'react';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';
import {styles} from './style';
import {Field, Formik} from 'formik';
import {SubscriptionModel} from '../../../screens/AboutUsScreen';
import {subscriptionSchema} from '../../../validation/SubscriptionSchema';
import FormikTextInput from '../../atoms/Formik/FormikTextInput/FormikTextInput';

interface OPNewsletterSubscribeProps {
  onSubmit: (email: string) => void;
}

const OPNewsletterSubscribe: React.FC<OPNewsletterSubscribeProps> = ({
  onSubmit,
}) => {
  const initialValues: SubscriptionModel = {
    email: '',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Prijavite se!</Text>
      <Text style={styles.text}>
        Prijavom na naš newsletter dobijaćete obaveštenje o aktuelnim donacijama
        i načinima kako možete pomoći ugroženim porodicama
      </Text>

      <Formik
        validationSchema={subscriptionSchema}
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values, {resetForm}) => {
          onSubmit(values.email);
          resetForm();
        }}>
        {({handleSubmit}) => (
          <View style={styles.formik}>
            <Field
              validateOnChange
              component={FormikTextInput}
              editable
              name={'email'}
              placeholder={'Vasa email adresa'}
            />
            <OPPrimaryButton
              style={styles.button}
              text={'PRIJAVA'}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default OPNewsletterSubscribe;
