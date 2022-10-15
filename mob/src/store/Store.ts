import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

import rootReducer, {RootState} from './reducers/RootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppThunkDispatch = () => useDispatch<AppThunkDispatch>();

export default store;
export const persistor = persistStore(store);
