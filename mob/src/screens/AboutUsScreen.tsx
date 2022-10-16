import React, {useEffect} from 'react';

import {SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {
  getAboutUs,
  subscribeToNewsLetters,
} from '../store/actions/AboutUsAction';
import {RootState} from '../store/reducers/RootReducer';
import {useAppThunkDispatch} from '../store/Store';
import OPHtml from '../components/atoms/OPHtml/OPHtml';
import OPNewsletterSubscribe from '../components/molecules/OPNewsletterSubscribe/OPNewsletterSubscribe';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';

export interface SubscriptionModel {
  email: string;
}

const AboutUsScreen = () => {
  const {html} = useSelector((state: RootState) => state.aboutUs);
  const dispatch = useAppThunkDispatch();

  useEffect(() => {
    dispatch(getAboutUs(dispatch));
  }, [dispatch]);

  const handleOnSubscribe = (email: string) => {
    dispatch(subscribeToNewsLetters(email));
  };

  return (
    <SafeAreaView>
      <OPSubheader heading="About Us" showDropdown={false} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.htmlContainer}>
          <OPHtml html={html} />
        </View>
        <OPNewsletterSubscribe onSubmit={handleOnSubscribe} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 200,
    paddingTop: 20,
  } as ViewStyle,
  htmlContainer: {
    paddingLeft: 16,
    paddingRight: 16,
  } as ViewStyle,
});

export default AboutUsScreen;
