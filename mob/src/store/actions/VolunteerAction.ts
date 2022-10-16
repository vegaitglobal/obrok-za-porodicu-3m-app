import {Dispatch} from '@reduxjs/toolkit';
import {
  setAppliedVolunteerActions,
  setVolunteerActions,
  setVolunteerActionStatuses,
  setVolunteerActionTypes,
  setSearchTerm,
  clearFilters,
  setCurrentVolunteerAction,
  setIsLoading,
} from '../reducers/VolunteerActionReducer';
import {
  ActionType,
  VolunteerActionDTO,
} from '../../models/VolunteerAction/VolunteerActionDTO';
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

export const onSetSearchTerm = (searchTerm: string) => (dispatch: Dispatch) =>
  dispatch(setSearchTerm(searchTerm));

export const onClearFilters = () => (dispatch: Dispatch) =>
  dispatch(clearFilters());

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

export const filterVolunteerActionsByTagsAndSearchTerm =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    const {appliedVolunteerActions, searchTerm} = getState().volunteerActions;

    const filtersIds = Object.keys(appliedVolunteerActions);

    if (filtersIds.length > 0 || searchTerm.length > 0) {
      const query = {ids: filtersIds, searchTerm};
      const res =
        await VolunteerActionsService.getVolunteerActionsByTagsAndSearchTerm(
          query,
        );

      return res;
    }
  };

export const getVolunteerAction = (id: number) => (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));
  VolunteerActionsService.getVolunteerAction(id)
    .then((res: ResponseModel) => {
      dispatch(setCurrentVolunteerAction(res.data as VolunteerActionDTO));
      dispatch(setIsLoading(false));
    })
    .catch(() => {
      dispatch(setIsLoading(false));
    });
};
