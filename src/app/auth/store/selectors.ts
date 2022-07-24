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