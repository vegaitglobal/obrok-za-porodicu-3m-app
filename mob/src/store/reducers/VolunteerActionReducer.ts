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
  searchTerm: string;
  currentActionStatus: number | null;
  appliedVolunteerActions: AppliedVolunteerAction;
  volunteerActionStatuses: Array<VolunteerActionStatus>;
  volunteerActionTypes: Array<ActionType>;
}

const initialState: VolunteerActionState = {
  appliedVolunteerActions: {},
  volunteerActions: [],
  searchTerm: '',
  currentPage: 0,
  totalData: 0,
  totalPages: 0,
  currentActionStatus: null,
  volunteerActionStatuses: [],
  volunteerActionTypes: [],
};

const volunteerActionsSlice = createSlice({
  initialState,
  name: 'volunteerActions',
  reducers: {
    clearFilters(state) {
      state.appliedVolunteerActions = {};
      state.searchTerm = '';
    },
    setCurrentActionStatus(state, {payload}: PayloadAction<number | null>) {
      state.currentActionStatus = payload;
    },
    setAppliedVolunteerActions(
      state,
      {payload}: PayloadAction<AppliedVolunteerAction>,
    ) {
      state.appliedVolunteerActions = payload;
    },
    setSearchTerm(state, {payload}: PayloadAction<string>) {
      state.searchTerm = payload;
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
  setCurrentActionStatus,
  setSearchTerm,
  clearFilters,
} = volunteerActionsSlice.actions;

export default volunteerActionsSlice.reducer;
