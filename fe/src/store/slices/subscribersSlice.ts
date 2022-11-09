import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubscribersModel } from "../../models/SubscribersModel";
import { SubscribersSliceModel } from "../model/subscribersSliceModel";

const initSubscribersSlice: SubscribersSliceModel = {
  subscribers: [],
};

const subscribersSlice = createSlice({
  name: "subscribers",
  initialState: initSubscribersSlice,
  reducers: {
    setSubscribers(state, action: PayloadAction<SubscribersModel[]>) {
      state.subscribers = action.payload;
    },
  },
});

export const { setSubscribers } = subscribersSlice.actions;

export default subscribersSlice.reducer;
