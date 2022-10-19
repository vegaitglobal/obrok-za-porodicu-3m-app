import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationModel } from "../../models/PaginationModel";
import { VolunteerActionModel } from "../../models/VolunteerActionModel";
import { VolunteerActionStatusModel } from "../../models/VolunteerActionStatusModel";
import { VolunteerActionSliceModel } from "../model/volunteerActionSliceModel";

const initVolunteerActionSlice: VolunteerActionSliceModel = {
  volunteerActions: [],
  volunteerActionStatuses: [],
  allVolunteerActions: [],
  searchTerm: "",
  actionTypeIds: [],
  pagination: { currentPage: 1, pageSize: 0, totalPages: 1, totalResults: 0 }
};

const volunteerActionSlice = createSlice({
  name: "volunteerAction",
  initialState: initVolunteerActionSlice,
  reducers: {
    setVolunteerActions(state, action: PayloadAction<VolunteerActionModel[]>) {
      state.volunteerActions = action.payload;
    },
    setVolunteerActionStatuses(
      state,
      action: PayloadAction<VolunteerActionStatusModel[]>
    ) {
      state.volunteerActionStatuses = action.payload;
    },
    setAllVolunteerActions(state, action: PayloadAction<VolunteerActionModel[]>) {
      state.allVolunteerActions = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addActionTypeId(state, action: PayloadAction<number>) {
      state.actionTypeIds = [...state.actionTypeIds, action.payload]
    },
    removeActionTypeId(state, action: PayloadAction<number>) {
      state.actionTypeIds = state.actionTypeIds.filter(element => element !== action.payload);
    },
    setPagination(state, action: PayloadAction<PaginationModel>) {
      state.pagination = action.payload;
    },
  },
});

export const { setVolunteerActions, setVolunteerActionStatuses, setAllVolunteerActions, setSearchTerm, addActionTypeId, removeActionTypeId, setPagination } =
  volunteerActionSlice.actions;

export default volunteerActionSlice.reducer;
