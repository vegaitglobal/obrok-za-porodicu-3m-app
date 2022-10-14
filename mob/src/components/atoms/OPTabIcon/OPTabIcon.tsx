import React from 'react';
import {Text, View} from 'react-native';
import Icons from '../../../constants/Icons';
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

  const renderIcon = () => {
    switch (type) {
      case 'home': {
        return focused ? Icons.HOME_FULL : Icons.HOME;
      }
      case 'news': {
        return focused ? Icons.FILE_FULL : Icons.FILE;
      }
      case 'about_us': {
        return focused ? Icons.USER_FULL : Icons.USER;
      }
      case 'contact': {
        return focused ? Icons.CALL_FULL : Icons.CALL;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>{renderIcon()}</View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default OPTabIcon;
