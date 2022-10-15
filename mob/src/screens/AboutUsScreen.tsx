import React, {useEffect} from 'react';

import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import OPParagraph from '../components/atoms/OPParagraph/OPParagraph';
import {AboutUsParagraphModel} from '../models/AboutUsParagraphModel';
import {getAboutUs} from '../store/actions/AboutUsAction';

import {RootState} from '../store/reducers/RootReducer';
import {useAppThunkDispatch} from '../store/Store';

const AboutUsScreen = () => {
  const {paragraphs} = useSelector((state: RootState) => state.aboutUs);
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getAboutUs(dispatch));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {paragraphs.map((e: AboutUsParagraphModel, i: number) => (
          <OPParagraph
            key={i.toString()}
            rowDescription={e.rowDescription}
            description={e.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {} as ViewStyle,
  scroll: {paddingBottom: 60} as ViewStyle,
});

export default AboutUsScreen;
