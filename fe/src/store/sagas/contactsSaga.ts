import { call, put } from "redux-saga/effects";
import { ContactModel } from "../../models/ContactModel";
import { ContactRequest } from "../../models/ContactRequest";
import contactsService from "../../services/contactService";
import { addContact, deleteContact, updateContact } from "../actions/contactTypes";
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

export function* handleAddContact({
  payload,
}: ReturnType<typeof addContact>): Generator<any, void, ContactRequest> {
  try {
    console.log("SAGA")
    console.log(payload);
    yield call(
      contactsService.addContact,
      payload
    );
    yield call(handleGetContacts);
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleUpdateContact({
  payload,
}: ReturnType<typeof updateContact>): Generator<any, void, ContactModel> {
  try {
    console.log("SAGA")
    console.log(payload);
    yield call(
      contactsService.updateContact,
      payload
    );
    yield call(handleGetContacts);
  } catch (error: any) {
    console.log(error);
  }
}

