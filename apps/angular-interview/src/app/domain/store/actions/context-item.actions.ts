import {createAction, props} from '@ngrx/store';
import { ContextItem } from '../../models/context-item.model';

export enum ContextItemActionTypes {
  SET_CONTEXT_ITEMS = '[CONTEXT_ITEM] SET_CONTEXT_ITEMS',
  TOGGLE_LOADING = '[CONTEXT_ITEM] TOGGLE_LOADING'
}

export const setContextItems = createAction(ContextItemActionTypes.SET_CONTEXT_ITEMS, props<{ contextItems: Array<ContextItem>}>());
export const toggleLoading = createAction(ContextItemActionTypes.TOGGLE_LOADING, props<{ loading: boolean }>());
