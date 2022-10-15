import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AboutUsParagraphModel} from '../../models/AboutUsParagraphModel';

interface AboutUsState {
  paragraphs: Array<AboutUsParagraphModel>;
}

const initialState: AboutUsState = {
  paragraphs: [],
};

const aboutUsSlice = createSlice({
  initialState,
  name: 'aboutUsReducer',
  reducers: {
    setAboutUsParagraphs(
      state,
      {payload}: PayloadAction<Array<AboutUsParagraphModel>>,
    ) {
      state.paragraphs = payload;
    },
  },
});

export const {setAboutUsParagraphs} = aboutUsSlice.actions;

export default aboutUsSlice.reducer;
