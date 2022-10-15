import { call, put } from "redux-saga/effects";
import { ContactModel } from "../../models/ContactModel";
import contactsService from "../../services/contactService";
import { setContacts } from "../slices/contactSlice";

export function* handleGetContacts(): Generator<any, void, ContactModel[]> {
  try {
    const contacts: ContactModel[] = yield call(contactsService.getContacts);

    yield put(setContacts(contacts));
  } catch (error: any) {
    console.log(error);
  }
}
