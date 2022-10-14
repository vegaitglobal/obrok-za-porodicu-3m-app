import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import OPCarouselSlide from '../../atoms/OPCarouselSlide/OPCarouselSlide';

const OPCarousel = () => {
  const {width} = Dimensions.get('window');

  return (
    <View>
      <Text>OPCarousel</Text>
      <ScrollView
        horizontal
        snapToInterval={width}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}>
        {[<OPCarouselSlide />, <OPCarouselSlide />]}
      </ScrollView>
    </View>
  );
};

export default OPCarousel;
