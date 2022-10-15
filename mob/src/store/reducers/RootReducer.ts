import {combineReducers} from '@reduxjs/toolkit';

import contactSlice from './ContactReducer';
import userSlice from './UserReducer';

const rootReducer = combineReducers({
  contact: contactSlice,
  user: userSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
