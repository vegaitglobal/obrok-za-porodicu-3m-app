import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppliedVolunteerAction} from '../../models/VolunteerAction/AppliedVolunteerAction';

interface VolunteerActionState {
  appliedVolunteerActions: AppliedVolunteerAction;
}

const initialState: VolunteerActionState = {
  appliedVolunteerActions: {},
};

const volunteerActionsSlice = createSlice({
  initialState,
  name: 'volunteerActions',
  reducers: {
    setAppliedVolunteerActions(
      state,
      {payload}: PayloadAction<AppliedVolunteerAction>,
    ) {
      state.appliedVolunteerActions = payload;
    },
  },
});

export const {setAppliedVolunteerActions} = volunteerActionsSlice.actions;

export default volunteerActionsSlice.reducer;
