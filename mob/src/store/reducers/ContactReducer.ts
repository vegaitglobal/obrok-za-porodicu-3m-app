import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactModel } from "../../models/ContactModel";


interface ContactState {
    contacts: Array<ContactModel>
};

const initialState: ContactState = {
    contacts: []
};

const contactSlice = createSlice({
    initialState,
    name: 'brandCampaignReducer',
    reducers: {
        setContacts(state, {payload}: PayloadAction<Array<ContactModel>>) {
            state.contacts = payload;
        }
    }
});

export const {
    setContacts
} = contactSlice.actions;

export default contactSlice.reducer;
