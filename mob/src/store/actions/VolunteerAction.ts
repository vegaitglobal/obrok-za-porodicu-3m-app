import {Dispatch} from '@reduxjs/toolkit';

import type {RootState} from '../../store/reducers/RootReducer';
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
import {ResponseModel} from '../../models/ResponseModel';
import {VolunteerPageModel} from '../../models/VolunteerAction/VolunteerPageModel';
import {VolunteerActionStatus} from '../../models/VolunteerAction/VolunteerActionStatus';
import VolunteerActionsService from '../../services/VolunteerActionsService';
import Toast from 'react-native-toast-message';
import i18n from '../../translations/i18n';

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
      VolunteerActionsService.getActions(page)
        .then((res: ResponseModel) => {
          if (res) {
            dispatch(setVolunteerActions(res.data as VolunteerPageModel));
          }
        })
        .catch((err: any) => {
          console.error(err);
          Toast.show({
            type: 'error',
            props: {
              title: i18n.t('general.error'),
              description: i18n.t('general.errorText'),
            },
          });
        });
    }
  };

export const getVolunteerActionStatuses = () => (dispatch: Dispatch) => {
  VolunteerActionsService.getActionStatuses()
    .then((res: ResponseModel) => {
      if (res) {
        dispatch(
          setVolunteerActionStatuses(res.data as VolunteerActionStatus[]),
        );
      }
    })
    .catch((err: any) => {
      console.error(err);
      Toast.show({
        type: 'error',
        props: {
          title: i18n.t('general.error'),
          description: i18n.t('general.errorText'),
        },
      });
    });
};

export const getVolunteerActionTypes = () => (dispatch: Dispatch) => {
  VolunteerActionsService.getVolunteerActionTypes()
    .then((res: ResponseModel) => {
      if (res) {
        dispatch(setVolunteerActionTypes(res.data as Array<ActionType>));
      }
    })
    .catch((err: any) => {
      console.error(err);
      Toast.show({
        type: 'error',
        props: {
          title: i18n.t('general.error'),
          description: i18n.t('general.errorText'),
        },
      });
    });
};

export const filterVolunteerActionsByTagsAndSearchTerm =
  (
    filtersIds: number[],
    searchTerm: string,
    currentActionStatus: number | null,
    page: number,
  ): any =>
  async (dispatch: Dispatch, getState: () => RootState) => {
    if (currentActionStatus !== 0) {
      const query = {
        actionTypeIds: filtersIds,
        actionStatusesIds:
          currentActionStatus !== null ? [currentActionStatus] : [],
        searchTerm,
      };

      VolunteerActionsService.getVolunteerActionsByTagsAndSearchTerm(
        query,
        page,
      )
        .then((res: ResponseModel) => {
          res && dispatch(setVolunteerActions(res.data as VolunteerPageModel));
        })
        .catch((err: any) => {
          console.error(err);
          Toast.show({
            type: 'error',
            props: {
              title: i18n.t('general.error'),
              description: i18n.t('general.errorText'),
            },
          });
        });
    } else {
      const {actions} = getState().favourites;
      const newActions: Array<VolunteerActionDTO> = actions.filter(
        (action: VolunteerActionDTO) => {
          let shouldPassFilter: boolean = true;
          let shouldPassSearchTerm: boolean = true;

          if (filtersIds.length > 0) {
            shouldPassFilter = filtersIds.includes(action.type.id);
          }

          if (searchTerm) {
            shouldPassSearchTerm = action.title.includes(searchTerm);
          }

          return shouldPassFilter && shouldPassSearchTerm;
        },
      );
      dispatch(
        setVolunteerActions({
          content: newActions,
          pagination: {
            currentPage: 1,
            pageSize: 1,
            sort: '',
            totalPages: 1,
            totalResults: newActions.length,
          },
          filters: undefined,
          search: undefined,
        }),
      );
    }
  };

export const getVolunteerAction = (id: number) => (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));
  VolunteerActionsService.getVolunteerAction(id)
    .then((res: ResponseModel) => {
      dispatch(setCurrentVolunteerAction(res.data as VolunteerActionDTO));
      dispatch(setIsLoading(false));
    })
    .catch((err: any) => {
      dispatch(setIsLoading(false));
      Toast.show({
        type: 'error',
        props: {
          title: i18n.t('general.error'),
          description: i18n.t('general.errorText'),
        },
      });
      console.error(err);
    });
};
