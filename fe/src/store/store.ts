import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./sagas/rootSaga";
import volunteerActionsReducer from "./slices/volunteerActionSlice";
import volunteerActionTypesReducer from "./slices/volunteerActionTypeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    volunterActions: volunteerActionsReducer,
    volunteerActionTypes: volunteerActionTypesReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
