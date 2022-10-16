import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import {TextStyles} from '../constants/TextStyles';
import OPPrimaryButton from '../components/atoms/OPPrimaryButton/OPPrimaryButton';
import {useDispatch} from 'react-redux';
import {setIsOnboarded} from '../store/reducers/UserReducer';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';

const titles = [
  'onboardingScreen.title1',
  'onboardingScreen.title2',
  'onboardingScreen.title3',
  'onboardingScreen.title4',
];
const paragraphs = [
  'onboardingScreen.paragraph1',
  'onboardingScreen.paragraph2',
  'onboardingScreen.paragraph3',
  'onboardingScreen.paragraph4',
];
const images = [
  require('../../assets/images/onboarding1.png'),
  require('../../assets/images/onboarding2.png'),
  require('../../assets/images/onboarding3.png'),
  require('../../assets/images/onboarding4.png'),
];

const OnboardingScreen = () => {
  const {t} = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch<any>();
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const handleOnContinuePress = useCallback(() => {
    if (selectedIndex === 3) {
      dispatch(setIsOnboarded());
    } else {
      opacity.value = 0;
      setSelectedIndex(selectedIndex + 1);
    }
  }, [opacity, selectedIndex, dispatch]);

  useEffect(() => {
    if (opacity.value === 0) {
      opacity.value = withDelay(200, withTiming(1, {duration: 1800}));
    }
  }, [selectedIndex, opacity]);

  const getImageStyle = () => {
    switch (selectedIndex) {
      case 0:
        return styles.image1;
      case 1:
        return styles.image2;
      case 2:
        return styles.image3;
      case 3:
        return styles.image4;
      default:
        return {};
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[animatedStyle, styles.content]}>
        <Image source={images[selectedIndex]} style={getImageStyle()} />
        <Text style={styles.title}>{t(titles[selectedIndex])}</Text>
        <Text style={styles.paragraph}>{t(paragraphs[selectedIndex])}</Text>
      </Animated.View>
      <OPPrimaryButton
        text={t('onboardingScreen.continue')}
        onPress={handleOnContinuePress}
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <View style={styles.row}>
        <View style={[styles.dot, selectedIndex === 0 && styles.selectedDot]} />
        <View style={[styles.dot, selectedIndex === 1 && styles.selectedDot]} />
        <View style={[styles.dot, selectedIndex === 2 && styles.selectedDot]} />
        <View style={[styles.dot, selectedIndex === 3 && styles.selectedDot]} />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title: {
    ...TextStyles.CHEWY_REGULAR,
    fontSize: 24,
    color: Colors.BROWN,
    marginTop: '8%',
  },
  paragraph: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 16,
    color: Colors.BLACK,
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: '8%',
  },
  button: {
    width: 343,
    height: 58,
    position: 'absolute',
    bottom: 90,
  },
  buttonText: {
    fontFamily: 'Chewy-Regular',
    color: Colors.WHITE,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: Colors.LIGHTER_GRAY,
    marginRight: 8,
  },
  selectedDot: {
    backgroundColor: Colors.BROWN,
  },
  row: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
  },
  image1: {
    width: 215,
    height: 197,
  },
  image2: {
    width: 150,
    height: 132,
  },
  image3: {
    width: 172,
    height: 137,
  },
  image4: {
    width: 278,
    height: 201,
  },
});
