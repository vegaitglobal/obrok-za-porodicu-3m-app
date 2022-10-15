import {Dispatch} from '@reduxjs/toolkit';
import {
  setAppliedVolunteerActions,
  setVolunteerActions,
  setVolunteerActionStatuses,
  setVolunteerActionTypes,
} from '../reducers/VolunteerActionReducer';
import {ActionType} from '../../models/VolunteerAction/VolunteerActionDTO';
import type {RootState} from '../../store/reducers/RootReducer';
import VolunteerActionsService from '../../services/VolunteerActionsService';
import {ResponseModel} from '../../models/ResponseModel';
import {VolunteerPageModel} from '../../models/VolunteerAction/VolunteerPageModel';

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

export const getVolunteerActions = (page: number) => (dispatch: Dispatch) => {
  VolunteerActionsService.getActions(page).then((res: ResponseModel) => {
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

export const getVolunteerActionTypes = () => (dispatch: Dispatch) => {
  VolunteerActionsService.getVolunteerActionTypes().then(
    (res: ResponseModel) => {
      if (res) {
        dispatch(setVolunteerActionTypes(res.data as Array<ActionType>));
      }
    },
  );
};
