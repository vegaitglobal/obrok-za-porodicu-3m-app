import {combineReducers} from '@reduxjs/toolkit';

import contactSlice from './ContactReducer';
import volunteerActionsSlice from './VolunteerActionReducer';

const rootReducer = combineReducers({
  contact: contactSlice,
  volunteerActions: volunteerActionsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
