import { registerAction, registerSuccessAction, registerFailureAction } from './actions/register.action';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from './../shared/types/authState.interface';

export const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
};

const authReducer = createReducer(
    initialState,
    on(registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(registerSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
    })),
    on(registerFailureAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    }))

)

export function reducer(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}