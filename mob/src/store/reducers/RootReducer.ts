import { combineReducers } from '@reduxjs/toolkit';

import contactSlice from './ContactReducer';

const rootReducer = combineReducers({
    contact: contactSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
