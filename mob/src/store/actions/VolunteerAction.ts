import {Dispatch} from '@reduxjs/toolkit';
import {setAppliedVolunteerActions} from '../reducers/VolunteerActionReducer';
import {VolunteerActionStatus} from '../../models/VolunteerAction/VolunteerActionStatus';
import type {RootState} from '../../store/reducers/RootReducer';

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
