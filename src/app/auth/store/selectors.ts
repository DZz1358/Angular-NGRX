import { AuthStateInterface } from './../shared/types/authState.interface';
import { AppStateInterface } from './../../shared/types/appState.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const authFutureSelector = createFeatureSelector<AppStateInterface, AuthStateInterface>('auth')

export const isSubmittingSelector = createSelector(
    authFutureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsSelector = createSelector(
    authFutureSelector,
    (authState: AuthStateInterface) => authState.validationErrors
)

export const isLoggedInSelector = createSelector(
    authFutureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn
)

export const isAnonymousSelector = createSelector(
    authFutureSelector,
    (authState: AuthStateInterface) => authState.isLoggedIn === false
)
export const currentUserSelector = createSelector(
    authFutureSelector,
    (authState: AuthStateInterface) => authState.currentUser
)