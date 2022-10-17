import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../reducers/RootReducer';

const selectSelf = (state: RootState) => state.contact;

export const selectContacts = createSelector(
  selectSelf,
  state => state.contacts,
);
