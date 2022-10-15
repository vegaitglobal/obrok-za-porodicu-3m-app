import React from 'react';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import {styles} from './style';

interface OPImageProps {
  style?: ImageStyle;
  source: any;
}

const OPImage: React.FC<OPImageProps> = ({style, source}) => {
  return (
    <FastImage
      source={source}
      style={[styles.image, style]}
      resizeMode={'cover'}
    />
  );
};

export default OPImage;
