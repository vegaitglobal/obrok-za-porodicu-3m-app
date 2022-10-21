import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./sagas/rootSaga";
import authReducer from "./slices/authSlice";
import donationReducer from "./slices/donationSlice";
import volunteerActionsReducer from "./slices/volunteerActionSlice";
import volunteerActionTypesReducer from "./slices/volunteerActionTypeSlice";
import contactsReducer from "./slices/contactSlice";
import bankAccountReducer from "./slices/bankAccountSlice";
import aboutUsReucer from "./slices/aboutUsSlice";
import newsReducer from "./slices/newsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: donationReducer,
    volunterActions: volunteerActionsReducer,
    volunteerActionTypes: volunteerActionTypesReducer,
    contacts: contactsReducer,
    bankAccount: bankAccountReducer,
    aboutUs: aboutUsReucer,
    news: newsReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
