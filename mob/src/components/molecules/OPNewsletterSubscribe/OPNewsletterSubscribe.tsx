import {Text, View} from 'react-native';
import React from 'react';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';
import {styles} from './style';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();
  const initialValues: SubscriptionModel = {
    email: '',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('aboutUsScreen.subscribeTitle')}</Text>
      <Text style={styles.text}>{t('aboutUsScreen.subscribeText')}</Text>

      <Formik
        validationSchema={subscriptionSchema}
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values, {resetForm}) => {
          onSubmit(values.email);
          resetForm();
        }}>
        {({handleSubmit}) => (
          <>
            <Field
              validateOnChange
              component={FormikTextInput}
              editable
              name={'email'}
              placeholder={t('aboutUsScreen.subscribeTextboxHint')}
            />
            <OPPrimaryButton
              style={styles.button}
              text={t('aboutUsScreen.subscribeButton')}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

export default OPNewsletterSubscribe;
