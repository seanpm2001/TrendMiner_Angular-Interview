import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContextItemStore, getContextItems, getLoadingState } from '../store/context-item.store';
import { ContextItem } from '../models/context-item.model';
import { ContextItemService } from '../services/context-item.service';
import { ContextItemActions } from '../store/actions';

@Injectable()
export class ContextItemFacade {
  readonly contextItems$ = this.store.select(getContextItems);
  readonly isLoading$ = this.store.select(getLoadingState);

  constructor(private readonly store: Store<ContextItemStore>, private readonly contextItemService: ContextItemService) {
  }

  loadContextItems() {
    this.store.dispatch(ContextItemActions.toggleLoading({ loading: true }));

    //TODO: #1 Load existing context items from api server
    //TODO: #1 Make sure loaded context items are displayed
    //TODO: #1 Make sure the loading indicator is hidden
    //TODO: #1 For error handling: just log to console
  }

  createContextItem(contextItem: ContextItem) {
    this.contextItemService.createContextItem(contextItem).subscribe(
      () =>
        this.loadContextItems()
      , () =>
        console.error('Could not create the context item')
    );
  }
}
