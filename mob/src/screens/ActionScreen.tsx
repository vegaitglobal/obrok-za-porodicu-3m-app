import React, {useEffect} from 'react';
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
import OPHtml from '../components/atoms/OPHtml/OPHtml';
import OPImage from '../components/atoms/OPImage/OPImage';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import OPTagChip from '../components/atoms/OPTagChip/OPTagChip';
import OPDonateForm from '../components/organisms/OPDonateForm/OPDonateForm';
import {Colors} from '../constants/Colors';
import {TextStyles} from '../constants/TextStyles';
import {getVolunteerAction} from '../store/actions/VolunteerAction';
import {RootState} from '../store/reducers/RootReducer';
import {getRandomColor} from '../utils/getRandomColor';
import {useTranslation} from 'react-i18next';
import {clearCurrentVolunteerAction} from '../store/reducers/VolunteerActionReducer';
import {ActionScreenProps} from '../navigation/ActionsNavigator';

const ActionScreen: React.FC<ActionScreenProps> = ({navigation, route}) => {
  const {actionId} = route?.params;
  const dispatch = useDispatch<any>();
  const {t} = useTranslation();

  const {currentVolunteerAction, isLoading} = useSelector(
    (state: RootState) => state.volunteerActions,
  );

  useEffect(() => {
    dispatch(getVolunteerAction(actionId));
  }, [actionId, dispatch]);

  const handleRefresh = () => {
    dispatch(getVolunteerAction(actionId));
  };

  const handleGoBack = () => {
    dispatch(clearCurrentVolunteerAction());
    navigation.goBack();
  };

  if (currentVolunteerAction.id === -1) {
    return <ActivityIndicator size={'large'} style={styles.loader} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <OPSubheader
        heading={t('general.back')}
        showBackButton
        onBackPressed={handleGoBack}
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
        <View style={styles.htmlContainer}>
          <OPHtml html={currentVolunteerAction?.description} />
        </View>
        <View>
          <Text style={styles.title}>PRIJAVITE SE DA DONIRATE</Text>
          <Text style={styles.body}>
            Želite da se prijavite za donaciju? To možete uraditi tako što ćete
            popuniti formu ispod i Vaš zahtev za donaciju će biti uredno
            zabeležen, a na email ćete dobiti dalja uputstva.
          </Text>
        </View>
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
    marginHorizontal: 15,
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
  title: {
    ...TextStyles.CHEWY_REGULAR,
    textAlign: 'center',
    fontSize: 18,
    color: Colors.BROWN,
    paddingBottom: 16,
    marginTop: 20,
  },
  body: {
    ...TextStyles.DOSIS_REGULAR,
    textAlign: 'center',
    fontSize: 14,
    color: Colors.DARK_GRAY,
    paddingHorizontal: 10,
  },
});

export default ActionScreen;
