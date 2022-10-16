import {View, Text} from 'react-native';
import React from 'react';
import {ContactModel} from '../../../models/ContactModel';
import {styles} from './styles';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';
import {useTranslation} from 'react-i18next';

interface OPContactItemProps extends ContactModel {
  onCallPress: (phoneNumber: string) => void;
  onMailPress: (email: string) => void;
}

const OPContactItem: React.FC<OPContactItemProps> = ({
  email,
  phoneNumber,
  title,
  onCallPress,
  onMailPress,
}) => {
  const {t} = useTranslation();

  const onCallPressHandle = () => onCallPress(phoneNumber);

  const onEmailPressHandle = () => onMailPress(email);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.text}>{phoneNumber}</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <OPPrimaryButton
          onPress={onCallPressHandle}
          text={t('contactScreen.callUs')}
          style={styles.button}
        />
        <OPPrimaryButton
          onPress={onEmailPressHandle}
          text={t('contactScreen.sendEmail')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default OPContactItem;
