import { ContextItemState } from './state';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { ContextItemReducer } from './reducers';

export const FEATURE_NAME = 'context';

export interface ContextItemStore {
  [FEATURE_NAME]: State;
}

interface State {
  contextState: ContextItemState.State;
}

export const reducers: ActionReducerMap<State> = {
  contextState: ContextItemReducer.reducer
};

const getContextFeatureSelector = createFeatureSelector<State>(FEATURE_NAME);
const getContextState = createSelector(getContextFeatureSelector, state => state.contextState);

export const getContextItems = createSelector(getContextState, state => state.contextItems);
export const getLoadingState = createSelector(getContextState, state => state.loading);
