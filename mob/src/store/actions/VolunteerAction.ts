import {Dispatch} from '@reduxjs/toolkit';
import {
  setAppliedVolunteerActions,
  setVolunteerActions,
} from '../reducers/VolunteerActionReducer';
import {VolunteerActionStatus} from '../../models/VolunteerAction/VolunteerActionStatus';
import type {RootState} from '../../store/reducers/RootReducer';
import VolunteerActionsService from '../../services/VolunteerActionsService';
import {ResponseModel} from '../../models/ResponseModel';
import {VolunteerPageModel} from '../../models/VolunteerAction/VolunteerPageModel';

export const setAppliedFilters =
  (newFilters: VolunteerActionStatus, color: string) =>
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
  console.log('dodje');

  VolunteerActionsService.getActions(page).then((res: ResponseModel) => {
    if (res) {
      dispatch(setVolunteerActions(res.data as VolunteerPageModel));
    }
  });
};
