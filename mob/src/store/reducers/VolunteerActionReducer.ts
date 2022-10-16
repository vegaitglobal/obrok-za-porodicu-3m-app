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
  appliedVolunteerActions: AppliedVolunteerAction;
  volunteerActionStatuses: Array<VolunteerActionStatus>;
  volunteerActionTypes: Array<ActionType>;
  currentVolunteerAction: VolunteerActionDTO;
  isLoading: boolean;
}

const initialState: VolunteerActionState = {
  appliedVolunteerActions: {},
  volunteerActions: [],
  searchTerm: '',
  currentPage: 0,
  totalData: 0,
  totalPages: 0,
  volunteerActionStatuses: [],
  volunteerActionTypes: [],
  currentVolunteerAction: {
    id: -1,
    imageURL: '',
    shortDescription: '',
    status: {
      id: -1,
      name: '',
    },
    title: '',
    type: {
      id: -1,
      name: '',
    },
  },
  isLoading: false,
};

const volunteerActionsSlice = createSlice({
  initialState,
  name: 'volunteerActions',
  reducers: {
    clearFilters(state) {
      state.appliedVolunteerActions = {};
      state.searchTerm = '';
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
    setCurrentVolunteerAction(
      state,
      {payload}: PayloadAction<VolunteerActionDTO>,
    ) {
      state.currentVolunteerAction = payload;
    },
    clearCurrentVolunteerAction(state) {
      state.currentVolunteerAction = {
        id: -1,
        imageURL: '',
        shortDescription: '',
        status: {
          id: -1,
          name: '',
        },
        title: '',
        type: {
          id: -1,
          name: '',
        },
      };
    },
    setIsLoading(state, {payload}: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
  },
});

export const {
  setAppliedVolunteerActions,
  setVolunteerActions,
  setVolunteerActionTypes,
  setVolunteerActionStatuses,
  setSearchTerm,
  clearFilters,
  setCurrentVolunteerAction,
  clearCurrentVolunteerAction,
  setIsLoading,
} = volunteerActionsSlice.actions;

export default volunteerActionsSlice.reducer;
