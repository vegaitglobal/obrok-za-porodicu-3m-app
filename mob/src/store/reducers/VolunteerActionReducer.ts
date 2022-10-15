import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppliedVolunteerAction} from '../../models/VolunteerAction/AppliedVolunteerAction';
import {
  ActionType,
  VolunteerActionDTO,
} from '../../models/VolunteerAction/VolunteerActionDTO';
import {VolunteerActionStatus} from '../../models/VolunteerAction/VolunteerActionStatus';
import {VolunteerPageModel} from '../../models/VolunteerAction/VolunteerPageModel';

interface VolunteerActionState {
  volunteerActions: Array<VolunteerActionDTO>;
  currentPage: number;
  totalData: number;
  totalPages: number;
  appliedVolunteerActions: AppliedVolunteerAction;
  volunteerActionStatuses: Array<VolunteerActionStatus>;
  volunteerActionTypes: Array<ActionType>;
}

const initialState: VolunteerActionState = {
  appliedVolunteerActions: {},
  volunteerActions: [],
  currentPage: 0,
  totalData: 0,
  totalPages: 0,
  volunteerActionStatuses: [],
  volunteerActionTypes: [],
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
    setVolunteerActionTypes(
      state,
      {payload}: PayloadAction<Array<ActionType>>,
    ) {
      state.volunteerActionTypes = payload;
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
  setVolunteerActionTypes,
  setVolunteerActionStatuses,
} = volunteerActionsSlice.actions;

export default volunteerActionsSlice.reducer;
