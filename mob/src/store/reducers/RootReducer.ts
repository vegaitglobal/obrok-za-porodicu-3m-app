import {combineReducers} from '@reduxjs/toolkit';

import contactSlice from './ContactReducer';
import aboutUsSlice from './AboutUsReducer';
import volunteerActionsSlice from './VolunteerActionReducer';

const rootReducer = combineReducers({
  contact: contactSlice,
  aboutUs: aboutUsSlice,
  volunteerActions: volunteerActionsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
