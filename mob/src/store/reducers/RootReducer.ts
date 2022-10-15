import {combineReducers} from '@reduxjs/toolkit';

import contactSlice from './ContactReducer';
import aboutUsSlice from './AboutUsReducer';
import userSlice from './UserReducer';
import volunteerActionsSlice from './VolunteerActionReducer';
import newsSlice from './NewsReducer';
import bankAccountSlice from './BankAccountReducer';

const rootReducer = combineReducers({
  contact: contactSlice,
  user: userSlice,
  aboutUs: aboutUsSlice,
  volunteerActions: volunteerActionsSlice,
  news: newsSlice,
  bankAccount: bankAccountSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
