import { Component, OnInit } from '@angular/core';
import { ContextItem } from '../domain/models/context-item.model';
import { ContextItemFacade } from '../domain/facades/context-item.facade';

@Component({
  selector: 'tm-root',
  template: `
    <div class='app'>
      <div class='app__content'>
        <div id='loading' *ngIf='this.isLoading$ | async'>Loading...</div>
        <tm-context-list class='app__list' [contextItems]='contextItems$ | async'></tm-context-list>
        <tm-context-create class='app__create' (create)='onCreate($event)'></tm-context-create>
      </div>
    </div>
  `,
  styleUrls: ['./app.container.scss']
})
export class AppContainer implements OnInit {
  contextItems$ = this.contextItemFacade.contextItems$;
  isLoading$ = this.contextItemFacade.isLoading$;

  constructor(private contextItemFacade: ContextItemFacade) {

  }

  ngOnInit() {
    this.contextItemFacade.loadContextItems();
  }

  onCreate(contextItem: ContextItem) {
    //TODO: #2 Make sure the context item is stored on the API server
    console.log('Creating a context item:', contextItem);
  }
}
