import {Action, createReducer, on} from '@ngrx/store';
import { ContextItemActions } from '../actions';
import { ContextItemState } from '../state';

export const initialState: ContextItemState.State = {
  contextItems: [],
  loading: false
};

const contextItemReducer = createReducer(
    initialState,
    on(
        ContextItemActions.toggleLoading,
        (state, {loading}) => {
            return {
                ...state,
                loading: loading
            };
        }),
    on(
      ContextItemActions.setContextItems,
        (state, {contextItems}) => {
            return {
                ...state,
                contextItems: [...contextItems]
            };
        }
    )
);

export function reducer(state: ContextItemState.State | undefined, action: Action): ContextItemState.State {
    return contextItemReducer(state, action);
}
