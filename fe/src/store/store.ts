import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./sagas/rootSaga";
import volunteerActionsReducer from "./slices/volunteerActionSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { volunterActions: volunteerActionsReducer },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
