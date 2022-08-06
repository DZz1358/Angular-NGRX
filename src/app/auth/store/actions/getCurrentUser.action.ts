import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { createAction, props } from '@ngrx/store';
import { actionTypes } from '../actionTypes';

export const getCurrentUserAction = createAction(actionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  actionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(
  actionTypes.GET_CURRENT_USER_FAILURE
);
