import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ContactModel} from '../../models/ContactModel';

interface ContactState {
  contacts: Array<ContactModel>;
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      title: 'Obrok za porodicu',
      email: 'obrokzaporodicu@gmail.com',
      phoneNumber: '+381 691 234 567',
    },
    {
      id: 2,
      title: 'Mirjana Mutuc',
      email: 'obrokzaporodicu@gmail.com',
      phoneNumber: '+381 61 876 883 32',
    },
  ],
};

const contactSlice = createSlice({
  initialState,
  name: 'contactReducer',
  reducers: {
    setContacts(state, {payload}: PayloadAction<Array<ContactModel>>) {
      state.contacts = payload;
    },
  },
});

export const {setContacts} = contactSlice.actions;

export default contactSlice.reducer;
