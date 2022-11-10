import { call, put } from "redux-saga/effects";
import { SubscribersModel } from "../../models/SubscribersModel";
import subscribersService from "../../services/subscribersService";
import { addSubscribers, deleteSubscribers, updateSubscribers } from "../actions/subscribersTypes";
import { setSubscribers } from "../slices/subscribersSlice";

export function* handleGetSubscribers(): Generator<any, void, SubscribersModel[]> {
  try {
    const subscribers: SubscribersModel[] = yield call(subscribersService.getSubscribers);

    yield put(setSubscribers(subscribers));
  } catch (error: any) {
    console.error(error);
  }
}

export function* handleDeleteSubscribers({
  payload,
}: ReturnType<typeof deleteSubscribers>): Generator<any, void, void> {
  try {
    yield call(
      subscribersService.deleteSubscribers, 
      payload.subscribersId
    );
    yield call(handleGetSubscribers);
  } catch (error: any) {
    console.error(error);
  }
}

export function* handleAddSubscribers({
  payload,
}: ReturnType<typeof addSubscribers>): Generator<any, void, SubscribersModel> {
  try {
    yield call(
      subscribersService.addSubscribers,
      payload
    );
    yield call(handleGetSubscribers);
  } catch (error: any) {
    console.error(error);
  }
}

export function* handleUpdateSubscribers({
  payload,
}: ReturnType<typeof updateSubscribers>): Generator<any, void, SubscribersModel> {
  try {
    yield call(
      subscribersService.updateSubscribers,
      payload
    );
    yield call(handleGetSubscribers);
  } catch (error: any) {
    console.error(error);
  }
}

