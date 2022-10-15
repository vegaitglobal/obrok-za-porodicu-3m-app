import {combineReducers} from '@reduxjs/toolkit';

import contactSlice from './ContactReducer';
import aboutUsSlice from './AboutUsReducer';

const rootReducer = combineReducers({
  contact: contactSlice,
  aboutUs: aboutUsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
