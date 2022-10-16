import {Dispatch} from '@reduxjs/toolkit';
import {
  setAppliedVolunteerActions,
  setVolunteerActions,
  setVolunteerActionStatuses,
  setVolunteerActionTypes,
  setSearchTerm,
  setCurrentActionStatus,
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

export const onSetCurrentActionStatus =
  (status: number | null) => (dispatch: Dispatch) =>
    dispatch(setCurrentActionStatus(status));

export const getVolunteerActions =
  (page: number) => (dispatch: Dispatch, getState: () => RootState) => {
    const {appliedVolunteerActions, searchTerm, currentActionStatus} =
      getState().volunteerActions;

    const filtersIds = Object.keys(appliedVolunteerActions).map(Number);

    if (
      filtersIds.length > 0 ||
      searchTerm.length > 0 ||
      currentActionStatus !== null
    ) {
      dispatch(
        filterVolunteerActionsByTagsAndSearchTerm(
          filtersIds,
          searchTerm,
          currentActionStatus,
          page,
        ),
      );
    } else {
      VolunteerActionsService.getActions(page).then((res: ResponseModel) => {
        if (res) {
          dispatch(setVolunteerActions(res.data as VolunteerPageModel));
        }
      });
    }
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
  (
    filtersIds: number[],
    searchTerm: string,
    currentActionStatus: number | null,
    page: number,
  ): any =>
  async (dispatch: Dispatch) => {
    const query = {
      actionTypeIds: filtersIds,
      actionStatusesIds:
        currentActionStatus !== null ? [currentActionStatus] : [],
      searchTerm,
    };

    const res =
      await VolunteerActionsService.getVolunteerActionsByTagsAndSearchTerm(
        query,
        page,
      );

    if (res) {
      dispatch(setVolunteerActions(res.data as VolunteerPageModel));
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
