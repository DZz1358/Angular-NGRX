import { FeedStateInterface } from './../types/feedState.interface';
import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AppStateInterface } from "src/app/shared/types/appState.interface"


export const feedFutureSelector = createFeatureSelector<AppStateInterface, FeedStateInterface>('feed')

export const isLoadingSelector = createSelector(
  feedFutureSelector,
    (feedState: FeedStateInterface) => feedState.isLoading
)

export const errorSelector = createSelector(
  feedFutureSelector,
    (feedState: FeedStateInterface) => feedState.error
)

export const feedSelector = createSelector(
  feedFutureSelector,
    (feedState: FeedStateInterface) => feedState.data
)

