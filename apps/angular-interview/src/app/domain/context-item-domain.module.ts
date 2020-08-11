import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './store/context-item.store';
import { ContextItemService } from './services/context-item.service';
import { ContextItemFacade } from './facades/context-item.facade';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(FEATURE_NAME, reducers)
  ],
  providers: [
    ContextItemService,
    ContextItemFacade
  ]
})
export class ContextItemDomainModule {
}
