import React, {useCallback, useEffect, useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OPActionsList from '../components/organisms/OPActionsList/OPActionsList';
import OPHeader from '../components/organisms/OPHeader/OPHeader';
import {TextStyles} from '../constants/TextStyles';
import {getVolunteerActions} from '../store/actions/VolunteerAction';
import {RootState} from '../store/reducers/RootReducer';

const ActionsListScreen = () => {
  const dispatch: any = useDispatch();
  const {volunteerActions} = useSelector(
    (state: RootState) => state.volunteerActions,
  );
  const [page, setPage] = useState<number>(1);

  const getData = useCallback(
    (newPage: number) => {
      dispatch(getVolunteerActions(newPage));
    },
    [dispatch],
  );

  useEffect(() => {
    getData(1);
  }, [getData]);

  const handleLoadNextPage = () => {
    getData(page + 1);
    setPage(page + 1);
  };

  const handleRefresh = () => {
    getData(1);
    setPage(1);
  };

  return (
    <View style={styles.container}>
      <OPHeader />
      <OPActionsList
        actions={volunteerActions}
        onPress={() => {}}
        onLoadMore={handleLoadNextPage}
        onRefresh={handleRefresh}
      />
    </View>
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
