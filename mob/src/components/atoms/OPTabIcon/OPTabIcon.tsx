import React from 'react';
import {Text, View} from 'react-native';
import {TabType} from '../../../navigation/TabNavigator';
import OPDonateButton from '../OPDonateButton/OPDonateButton';
import {styles} from './style';

interface OPTabIconProps {
  text: string;
  type: TabType;
  focused: boolean;
}

const OPTabIcon: React.FC<OPTabIconProps> = ({text, type, focused}) => {
  if (type === 'donate') {
    return <OPDonateButton text={text} focused={focused} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default OPTabIcon;
