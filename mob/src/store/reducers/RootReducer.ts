import {combineReducers} from '@reduxjs/toolkit';

import contactSlice from './ContactReducer';
import userSlice from './UserReducer';
import volunteerActionsSlice from './VolunteerActionReducer';

const rootReducer = combineReducers({
  contact: contactSlice,
  user: userSlice,
  volunteerActions: volunteerActionsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
