import { actionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';
import { RegisterRequestInterface } from '../../shared/types/registerRequest.interface';

export const registerAction = createAction(
    actionTypes.REGISTER,
    props<RegisterRequestInterface>()
);