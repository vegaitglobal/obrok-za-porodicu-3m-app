import React, {useCallback, useEffect} from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {TextStyles} from '../constants/TextStyles';
import OPActionsList from '../components/organisms/OPActionsList/OPActionsList';
import {VolunteerActionDTO} from '../models/VolunteerAction/VolunteerActionDTO';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/reducers/RootReducer';
import {AppRoute} from '../navigation/Routes';
import {getVolunteerActions} from '../store/actions/VolunteerAction';

const actions: Array<VolunteerActionDTO> = [
  {
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
    imageUrl:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    id: 2,
    type: {
      id: 1,
      name: 'NOVAC',
    },
    title: 'Akcija prikupljanja sredstava za porodicu Popovic',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    status: {
      id: 1,
      name: 'Sredstva prikupljena',
    },

    imageUrl:
      'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80',
  },
];

const ActionsListScreen = ({navigation}) => {
  const dispatch: any = useDispatch();
  const {volunteerActions} = useSelector(
    (state: RootState) => state.volunteerActions,
  );

  const getData = useCallback(() => {
    // dispatch(getVolunteerActions(1));
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Action List Screen</Text>
      <OPActionsList
        actions={actions}
        onPress={actionId =>
          navigation.navigate(AppRoute.ACTION_SCREEN, {actionId})
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  a: {
    ...TextStyles.DOSIS_SEMI_BOLD,
    fontSize: 20,
  },
});

export default ActionsListScreen;
