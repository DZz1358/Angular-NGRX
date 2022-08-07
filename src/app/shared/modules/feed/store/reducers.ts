import { getFeedAction, getFeedSuccessAction, getFeedFailureAction } from './actions/action';
import { Action, createReducer, on } from '@ngrx/store';
import { FeedStateInterface } from './../types/feedState.interface';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false
    })
  )
);



export function reducer(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}

