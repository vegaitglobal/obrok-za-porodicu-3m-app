import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import OPImage from '../components/atoms/OPImage/OPImage';
import OPHtml from '../components/atoms/OPHtml/OPHtml';
import OPSubheader from '../components/atoms/OPSubheader/OPSubheader';
import {TextStyles} from '../constants/TextStyles';
import {Colors} from '../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import Icons from '../constants/Icons';

interface INewsProps {
  route: any;
}

const NewsScreen: FC<INewsProps> = ({route}) => {
  const [data, setData] = useState({
    id: 1,
    type: {
      id: 1,
      name: 'NOVAC',
    },
    title:
      'Vest naslov vesti #5 Ova vest je bas jako dugacka ona bi trebalo da zauzme cak i tri reda',
    shortDescription: 'Autor Vesti | 14.Avg.2022',
    status: {
      id: 2,
      name: 'Trenutno u toku',
    },
    html: '<p>Lorem ipsum </p>',
    imageUrl:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  });

  useEffect(() => {}, [route]);

  return (
    <SafeAreaView style={styles.container}>
      <OPSubheader heading="Nazad" items={[]} />
      <ScrollView>
        <OPImage source={{uri: data.imageUrl}} style={styles.images} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{data?.title}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.authorText}>{data?.shortDescription}</Text>
          {Icons.SHARE}
        </View>
        <View style={styles.htmlContainer}>
          <OPHtml html={data?.html} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.authorText}>{data?.shortDescription}</Text>
          {Icons.SHARE}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  htmlContainer: {
    paddingBottom: 16,
  },
  images: {
    width: '100%',
    height: 224,
    marginBottom: 8,
  },
  headerTextContainer: {
    paddingHorizontal: 16,
  },
  headerText: {
    ...TextStyles.DOSIS_EXTRA_BOLD,
    fontSize: 18,
    marginBottom: 8,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  authorText: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 16,
    color: Colors.LIGHT_GRAY,
    marginBottom: 8,
  },
});

export default NewsScreen;
