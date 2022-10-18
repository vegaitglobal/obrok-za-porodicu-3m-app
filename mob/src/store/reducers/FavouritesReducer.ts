import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {VolunteerActionDTO} from '../../models/VolunteerAction/VolunteerActionDTO';

interface FavouritesState {
  actions: Array<VolunteerActionDTO>;
}

const initialState: FavouritesState = {
  actions: [],
};

const favouritesSlice = createSlice({
  initialState,
  name: 'favouritesReducer',
  reducers: {
    addToFavourites(state, {payload}: PayloadAction<VolunteerActionDTO>) {
      state.actions.push(payload);
    },
    removeFromFavourites(state, {payload}: PayloadAction<number>) {
      state.actions = state.actions.filter(
        (action: VolunteerActionDTO) => action.id !== payload,
      );
    },
  },
});

export const {addToFavourites, removeFromFavourites} = favouritesSlice.actions;

export default favouritesSlice.reducer;
