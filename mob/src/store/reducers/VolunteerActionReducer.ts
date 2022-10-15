import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppliedVolunteerAction} from '../../models/VolunteerAction/AppliedVolunteerAction';
import {VolunteerActionDTO} from '../../models/VolunteerAction/VolunteerActionDTO';
import {VolunteerActionStatus} from '../../models/VolunteerAction/VolunteerActionStatus';
import {VolunteerPageModel} from '../../models/VolunteerAction/VolunteerPageModel';

interface VolunteerActionState {
  volunteerActions: Array<VolunteerActionDTO>;
  currentPage: number;
  totalData: number;
  totalPages: number;
  appliedVolunteerActions: AppliedVolunteerAction;
  volunteerActionStatuses: Array<VolunteerActionStatus>;
}

const initialState: VolunteerActionState = {
  appliedVolunteerActions: {},
  volunteerActions: [],
  currentPage: 0,
  totalData: 0,
  totalPages: 0,
  volunteerActionStatuses: [],
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
      if (payload.pagination.currentPage === 1) {
        state.volunteerActions = payload.content;
      } else {
        state.volunteerActions = [
          ...state.volunteerActions,
          ...payload.content,
        ];
      }
      state.currentPage = payload.pagination.currentPage;
      state.totalData = payload.pagination.totalResults;
      state.totalPages = payload.pagination.totalPages;
    },
    setVolunteerActionStatuses(
      state,
      {payload}: PayloadAction<VolunteerActionStatus[]>,
    ) {
      state.volunteerActionStatuses = payload;
    },
  },
});

export const {
  setAppliedVolunteerActions,
  setVolunteerActions,
  setVolunteerActionStatuses,
} = volunteerActionsSlice.actions;

export default volunteerActionsSlice.reducer;
