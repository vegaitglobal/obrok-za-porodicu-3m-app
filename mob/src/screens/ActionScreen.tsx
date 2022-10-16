import React, {FC, useEffect} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import OPImage from '../components/atoms/OPImage/OPImage';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import OPTagChip from '../components/atoms/OPTagChip/OPTagChip';
import OPDonateForm from '../components/organisms/OPDonateForm/OPDonateForm';
import {Colors} from '../constants/Colors';
import {TextStyles} from '../constants/TextStyles';
import {getVolunteerAction} from '../store/actions/VolunteerAction';
import {RootState} from '../store/reducers/RootReducer';
import {getRandomColor} from '../utils/getRandomColor';

interface IActionProps {
  route: any;
  navigation: any;
}

const ActionScreen: FC<IActionProps> = ({navigation, route}) => {
  const dispatch = useDispatch<any>();

  const {currentVolunteerAction, isLoading} = useSelector(
    (state: RootState) => state.volunteerActions,
  );
  console.log(currentVolunteerAction);

  useEffect(() => {
    dispatch(getVolunteerAction(route.actionId));
  }, [route, dispatch]);

  const handleRefresh = () => {
    dispatch(getVolunteerAction(route.actionId));
  };

  if (currentVolunteerAction.id === -1) {
    return <ActivityIndicator size={'large'} style={styles.loader} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <OPSubheader
        heading="Nazad"
        showBackButton
        onBackPressed={() => navigation.goBack()}
        showDropdown={false}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }>
        <OPImage
          source={{uri: currentVolunteerAction?.imageURL}}
          style={styles.images}
        />
        <View style={styles.contentContainer}>
          <View style={styles.chipContainer}>
            <OPTagChip
              volunteerAction={currentVolunteerAction?.type?.name}
              fill
              color={getRandomColor(currentVolunteerAction?.type?.id)}
            />
          </View>
          <Text style={styles.headerText}>{currentVolunteerAction?.title}</Text>
          <Text style={styles.dontationTypeText}>Anonimna donacija</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Status</Text>
            <Text style={[styles.statusText, styles.statusValueText]}>
              {currentVolunteerAction?.status?.name}
            </Text>
          </View>
        </View>
        {/* <View style={styles.htmlContainer}>
          <OPHtml html={currentVolunteerAction?.html} />
        </View> */}
        <OPDonateForm actionType={currentVolunteerAction?.type?.id} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingBottom: 70,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  htmlContainer: {
    paddingBottom: 16,
  },
  chipContainer: {
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  images: {
    width: '100%',
    height: 224,
    marginBottom: 8,
  },
  headerText: {
    ...TextStyles.DOSIS_EXTRA_BOLD,
    fontSize: 18,
    marginBottom: 8,
  },
  dontationTypeText: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 16,
    color: Colors.LIGHT_GRAY,
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusText: {
    ...TextStyles.DOSIS_REGULAR,
    fontSize: 14,
    color: Colors.LIGHT_GRAY,
    marginBottom: 8,
  },
  statusValueText: {
    color: Colors.ORANGE,
  },
  loader: {
    flex: 1,
  },
});

export default ActionScreen;
