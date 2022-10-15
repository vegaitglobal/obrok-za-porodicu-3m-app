import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactModel } from "../../models/ContactModel";
import { ContactSliceModel } from "../model/contactSliceModel";
import { VolunteerActionSliceModel } from "../model/volunteerActionSliceModel";

const initContactsSlice: ContactSliceModel = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initContactsSlice,
  reducers: {
    setContacts(state, action: PayloadAction<ContactModel[]>) {
      state.contacts = action.payload;
    },
  },
});

export const { setContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
