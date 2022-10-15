import React, {useEffect} from 'react';

import {SafeAreaView, StyleSheet, View, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {getAboutUs} from '../store/actions/AboutUsAction';
import {RootState} from '../store/reducers/RootReducer';
import {useAppThunkDispatch} from '../store/Store';
import OPHtml from '../components/atoms/OPHtml/OPHtml';
import OPNewsletterSubscribe from '../components/molecules/OPNewsletterSubscribe/OPNewsletterSubscribe';

const AboutUsScreen = () => {
  const {html} = useSelector((state: RootState) => state.aboutUs);
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getAboutUs(dispatch));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.htmlContainer}>
          <OPHtml html={html} />
        </View>
        <OPNewsletterSubscribe />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {} as ViewStyle,
  scroll: {paddingBottom: 60} as ViewStyle,
  htmlContainer: {paddingLeft: 16, paddingRight: 16} as ViewStyle,
});

export default AboutUsScreen;
