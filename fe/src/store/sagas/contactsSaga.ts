import { call, put } from "redux-saga/effects";
import { ContactModel } from "../../models/ContactModel";
import contactsService from "../../services/contactService";
import { deleteContact } from "../actions/contactTypes";
import { setContacts } from "../slices/contactSlice";

export function* handleGetContacts(): Generator<any, void, ContactModel[]> {
  try {
    const contacts: ContactModel[] = yield call(contactsService.getContacts);

    yield put(setContacts(contacts));
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleDeleteContact({
  payload,
}: ReturnType<typeof deleteContact>): Generator<any, void, void> {
  try {
    yield call(contactsService.deleteContact, payload.contactId);
    yield call(handleGetContacts);
  } catch (error: any) {
    console.log(error);
  }
}
