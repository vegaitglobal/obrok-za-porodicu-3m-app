import {View, Text, Image} from 'react-native';
import React from 'react';
import {SocialMedia, SocialMediaType} from '../../../models/SocialMedia';
import OPPrimaryButton from '../../atoms/OPPrimaryButton/OPPrimaryButton';
import {styles} from './styles';

interface OPSocialMeadiaItemProps extends SocialMedia {
  //id is for opening with the app, link is fallback
  onPress: (id: string, type: SocialMediaType, link: string) => void;
}

const OPSocialMeadiaItem: React.FC<OPSocialMeadiaItemProps> = ({
  name,
  thumbnail,
  buttonBGColor,
  buttonLabel,
  buttonTextcolor,
  link,
  id,
  type,
  onPress,
}) => {
  const onPressHandle = () => onPress(id, type, link);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={thumbnail} style={styles.thumbnail} />
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <OPPrimaryButton
        text={buttonLabel}
        onPress={onPressHandle}
        style={[styles.button, {backgroundColor: buttonBGColor}]}
        textStyle={[styles.buttonText, {color: buttonTextcolor}]}
      />
    </View>
  );
};

export default React.memo(OPSocialMeadiaItem);
