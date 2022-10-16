import {Text, View} from 'react-native';
import React from 'react';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';
import {styles} from './style';
import {useTranslation} from 'react-i18next';

const OPNewsletterSubscribe = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{t('aboutUsScreen.subscribeTitle')}</Text>
      <Text style={styles.text}>{t('aboutUsScreen.subscribeText')}</Text>

      {/* <FormikTextInput
        field={undefined}
        form={undefined}
        label={''}
        editable={false}
      /> */}
      {/* text box input hint: t('aboutUsScreen.subscribeTextboxHint') */}
      <Text style={styles.heading}>FORMIK OVDE</Text>
      <OPPrimaryButton
        text={t('aboutUsScreen.subscribeButton')}
        onPress={(): void => {}}
      />
    </View>
  );
};

export default OPNewsletterSubscribe;
