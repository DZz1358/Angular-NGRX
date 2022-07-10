import { actionTypes } from './../actionTypes';
import { createAction, props } from '@ngrx/store';

export const registerAction = createAction(
    actionTypes.REGISTER,
    props<{ username: string; password: string; email: string; }>()
);