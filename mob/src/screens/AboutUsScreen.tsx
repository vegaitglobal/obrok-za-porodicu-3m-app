import React, {useEffect} from 'react';

import {SafeAreaView, StyleSheet, Text, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import OPParagraph from '../components/atoms/OPParagraph/OPParagraph';
import {AboutUsParagraphModel} from '../models/AboutUsParagraphModel';
import {getAboutUs} from '../store/actions/AboutUsAction';
import {RootState} from '../store/reducers/RootReducer';

const AboutUsScreen = () => {
  const paragraphs: AboutUsParagraphModel[] = useSelector(
    (state: RootState) => state.aboutUs.paragraphs,
  );

  useEffect(() => {
    getAboutUs();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>About Us Screen</Text>
      {paragraphs.map((e: AboutUsParagraphModel, i: number) => (
        <OPParagraph
          key={i.toString()}
          rowDescription={e.rowDescription}
          description={e.description}
        />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {} as ViewStyle,
});

export default AboutUsScreen;
