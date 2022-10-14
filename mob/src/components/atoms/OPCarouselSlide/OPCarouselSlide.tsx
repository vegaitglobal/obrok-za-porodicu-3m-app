import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';

const OPCarouselSlide: React.FC = () => {
  const width = useWindowDimensions();
  return (
    <View style={width}>
      <Text>Title</Text>
    </View>
  );
};

export default OPCarouselSlide;
