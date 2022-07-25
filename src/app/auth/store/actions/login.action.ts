import { BackendErrorsInterface } from './../../../shared/types/backendErrors.interface';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { LoginRequestInterface } from './../../shared/types/loginReauest.interface';
import { actionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
    actionTypes.LOGIN,
    props<{request: LoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
    actionTypes.LOGIN_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)
export const loginFailureAction = createAction(
    actionTypes.LOGIN_FAILURE,
    props<{errors: BackendErrorsInterface}>()
)