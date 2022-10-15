import {combineReducers} from '@reduxjs/toolkit';

import contactSlice from './ContactReducer';
import userSlice from './UserReducer';
import volunteerActionsSlice from './VolunteerActionReducer';
import newsSlice from './NewsReducer';

const rootReducer = combineReducers({
  contact: contactSlice,
  user: userSlice,
  volunteerActions: volunteerActionsSlice,
  news: newsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
