import React, {useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {getAboutUs} from '../store/actions/AboutUsAction';
import RenderHtml from 'react-native-render-html';
import {RootState} from '../store/reducers/RootReducer';
import {useAppThunkDispatch} from '../store/Store';
import {TextStyles} from '../constants/TextStyles';
import OPNewsletterSubscribe from '../components/molecules/OPNewsletterSubscribe/OPNewsletterSubscribe';

const AboutUsScreen = () => {
  const {html} = useSelector((state: RootState) => state.aboutUs);
  const dispatch = useAppThunkDispatch();
  useEffect(() => {
    dispatch(getAboutUs(dispatch));
  }, [dispatch]);
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.htmlContainer}>
          <RenderHtml
            enableExperimentalGhostLinesPrevention={true}
            enableExperimentalBRCollapsing={true}
            source={{html: html}}
            contentWidth={width}
            systemFonts={[
              TextStyles.DOSIS_REGULAR.fontFamily!,
              TextStyles.DOSIS_EXTRA_BOLD.fontFamily!,
            ]}
            ignoredDomTags={['br']}
            tagsStyles={{
              p: {
                fontSize: 16,
                fontFamily: TextStyles.DOSIS_REGULAR.fontFamily,
                fontWeight: 'normal',
              },
              h1: {
                fontSize: 18,
                fontFamily: TextStyles.DOSIS_EXTRA_BOLD.fontFamily,
                fontWeight: '800',
              },
            }}
          />
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
