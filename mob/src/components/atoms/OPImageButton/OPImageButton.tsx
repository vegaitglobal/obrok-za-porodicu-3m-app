import {
  TouchableOpacity,
  ImageSourcePropType,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import React from 'react';

interface OPImageButtonProps {
  onPress: () => void;
  imageSource: ImageSourcePropType;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const OPImageButton: React.FC<OPImageButtonProps> = ({
  onPress,
  imageSource,
  imageStyle,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[containerStyle]}>
      <Image source={imageSource} style={[{width: '100%'}, imageStyle]} />
    </TouchableOpacity>
  );
};

export default OPImageButton;
