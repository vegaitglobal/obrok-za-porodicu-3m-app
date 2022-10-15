import {Dispatch} from '@reduxjs/toolkit';
import {
  setAppliedVolunteerActions,
  setVolunteerActions,
  setVolunteerActionStatuses,
} from '../reducers/VolunteerActionReducer';
import {ActionType} from '../../models/VolunteerAction/VolunteerActionDTO';
import type {RootState} from '../../store/reducers/RootReducer';
import VolunteerActionsService from '../../services/VolunteerActionsService';
import {ResponseModel} from '../../models/ResponseModel';
import {VolunteerPageModel} from '../../models/VolunteerAction/VolunteerPageModel';
import {VolunteerActionStatus} from '../../models/VolunteerAction/VolunteerActionStatus';

export const setAppliedFilters =
  (newFilters: ActionType, color: string) =>
  (dispatch: Dispatch, getState: () => RootState) => {
    const {appliedVolunteerActions} = getState().volunteerActions;

    const filterUpdate = {...appliedVolunteerActions};

    if (filterUpdate[newFilters.id]) {
      delete filterUpdate[newFilters.id];
    } else {
      filterUpdate[newFilters.id] = {name: newFilters.name, color};
    }
    dispatch(setAppliedVolunteerActions(filterUpdate));
  };

export const getVolunteerActions =
  (page: number, pageSize?: number, filter?: number[], searchQuery?: string) =>
  (dispatch: Dispatch) => {
    VolunteerActionsService.getActions(
      page,
      pageSize,
      searchQuery,
      filter,
    ).then((res: ResponseModel) => {
      if (res) {
        dispatch(setVolunteerActions(res.data as VolunteerPageModel));
      }
    });
  };

export const getVolunteerActionStatuses = () => (dispatch: Dispatch) => {
  VolunteerActionsService.getActionStatuses().then((res: ResponseModel) => {
    if (res) {
      dispatch(setVolunteerActionStatuses(res.data as VolunteerActionStatus[]));
    }
  });
};
