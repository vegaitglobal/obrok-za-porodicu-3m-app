import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppliedVolunteerAction} from '../../models/VolunteerAction/AppliedVolunteerAction';
import {VolunteerActionDTO} from '../../models/VolunteerAction/VolunteerAction';
import {VolunteerPageModel} from '../../models/VolunteerAction/VolunteerPageModel';

interface VolunteerActionState {
  volunteerActions: Array<VolunteerActionDTO>;
  currentPage: number;
  totalData: number;
  totalPages: number;
  appliedVolunteerActions: AppliedVolunteerAction;
}

const initialState: VolunteerActionState = {
  appliedVolunteerActions: {},
  volunteerActions: [],
  currentPage: 0,
  totalData: 0,
  totalPages: 0,
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
    setVolunteerActions(state, {payload}: PayloadAction<VolunteerPageModel>) {
      state.volunteerActions = payload.content;
      state.currentPage = payload.pagination.currentPage;
      state.totalData = payload.pagination.totalResults;
      state.totalPages = payload.pagination.totalPages;
    },
  },
});

export const {setAppliedVolunteerActions, setVolunteerActions} =
  volunteerActionsSlice.actions;

export default volunteerActionsSlice.reducer;
