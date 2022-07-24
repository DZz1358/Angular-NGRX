import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { BackendErrorsInterface } from './../../../shared/types/backendErrors.interface';
import { actionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../../shared/types/registerRequest.interface';

export const registerAction = createAction(
    actionTypes.REGISTER,
    props<{request: RegisterRequestInterface}>()
);
export const registerSuccessAction = createAction(
    actionTypes.REGISTER_SUCCESS,
    props<{currentUser:CurrentUserInterface}>()
);
export const registerFailureAction = createAction(
    actionTypes.REGISTER_FAILURE,
    props<{errors: BackendErrorsInterface}>()
);