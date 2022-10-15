import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import thunkMiddleware, { ThunkDispatch } from "redux-thunk";

import rootReducer from "./reducers/RootReducer";

const store = configureStore({
  reducer: rootReducer,
  //   middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
// export type Dispatcher = ThunkDispatch<RootState, undefined, AnyAction>;

export default store;
