import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './style';

interface OPEmptyListStateProps {
  text: string;
  image?: any;
}

const IMAGE_LOGO = require('../../../../assets/images/image_logo.png');

const OPEmptyListState: React.FC<OPEmptyListStateProps> = ({
  text,
  image = IMAGE_LOGO,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default OPEmptyListState;
