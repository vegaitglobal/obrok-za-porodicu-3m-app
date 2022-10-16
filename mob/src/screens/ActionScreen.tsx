import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import OPImage from '../components/atoms/OPImage/OPImage';
import OPHtml from '../components/atoms/OPHtml/OPHtml';
import OPTagChip from '../components/atoms/OPTagChip/OPTagChip';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import {TextStyles} from '../constants/TextStyles';
import {getRandomColor} from '../utils/getRandomColor';
import {Colors} from '../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import OPDonateForm from '../components/organisms/OPDonateForm/OPDonateForm';
import {useTranslation} from 'react-i18next';

interface IActionProps {
  route: any;
  navigation: any;
}

const ActionScreen: FC<IActionProps> = ({navigation, route}) => {
  const {t} = useTranslation();
  const [data, setData] = useState({
    id: 1,
    type: {
      id: 1,
      name: 'NOVAC',
    },
    title: 'Akcija prikupljanja sredstava za porodicu Popovic',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    status: {
      id: 2,
      name: 'Trenutno u toku',
    },
    html: '',
    imageUrl:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  });

  useEffect(() => {}, [route]);

  return (
    <SafeAreaView style={styles.container}>
      <OPSubheader
        heading={t('general.back')}
        showBackButton
        onBackPressed={() => navigation.goBack()}
        showDropdown={false}
      />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <OPImage source={{uri: data.imageUrl}} style={styles.images} />
        <View style={styles.contentContainer}>
          <View style={styles.chipContainer}>
            <OPTagChip
              volunteerAction={data?.type?.name}
              fill
              color={getRandomColor(data?.type?.id)}
            />
          </View>
          <Text style={styles.headerText}>{data.title}</Text>
          <Text style={styles.dontationTypeText}>Anonimna donacija</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Status</Text>
            <Text style={[styles.statusText, styles.statusValueText]}>
              {data?.status?.name}
            </Text>
          </View>
        </View>
        <View style={styles.htmlContainer}>
          <OPHtml html={data?.html} />
        </View>
        <OPDonateForm
          actionType={data?.type?.id}
          volunteerActionId={data?.id}
        />
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
});

export default ActionScreen;
