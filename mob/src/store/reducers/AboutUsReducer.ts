import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AboutUsState {
  html: string;
}

const initialState: AboutUsState = {
  html: '<p>Loading, please wait.</p>',
};

const aboutUsSlice = createSlice({
  initialState,
  name: 'aboutUsReducer',
  reducers: {
    setAboutUsText(state, {payload}: PayloadAction<string>) {
      state.html = payload;
    },
  },
});

export const {setAboutUsText} = aboutUsSlice.actions;

export default aboutUsSlice.reducer;
