import {
  TouchableOpacity,
  ImageSourcePropType,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  Text,
} from 'react-native';
import React from 'react';
import {styles} from './style';

interface OPImageButtonProps {
  onPress: () => void;
  hasButton?: boolean;
  buttonText?: string;
  imageSource: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const OPImageButton: React.FC<OPImageButtonProps> = ({
  onPress,
  hasButton = false,
  buttonText = '',
  imageSource,
  imageStyle,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[containerStyle]}>
      <Image source={imageSource} style={[styles.image, imageStyle]} />
      {hasButton && (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default OPImageButton;
