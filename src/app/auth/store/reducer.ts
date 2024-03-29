import { getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction } from './actions/getCurrentUser.action';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions/login.action';
import { registerAction, registerSuccessAction, registerFailureAction } from './actions/register.action';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from './../shared/types/authState.interface';

export const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
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
    })),
    on(loginAction, (state): AuthStateInterface =>({
        ...state,
        isSubmitting: true,
        validationErrors: null
    })),
    on(loginSuccessAction, (state, action): AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser,
    })),
    on(loginFailureAction, (state, action) => ({
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
    })),
    on(getCurrentUserAction, (state): AuthStateInterface =>({
      ...state,
      isLoading: true
    })),
    on(getCurrentUserSuccessAction, (state, action): AuthStateInterface =>({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })),
    on(getCurrentUserFailureAction, (state): AuthStateInterface => ({
      ...state,
      isLoading:false,
      isLoggedIn: false,
      currentUser: null
    }))

)

export function reducer(state: AuthStateInterface, action: Action) {
    return authReducer(state, action);
}
