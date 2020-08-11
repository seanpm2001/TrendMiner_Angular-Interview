import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppContainer } from './containers/app.container';
import { ContextCreateComponent } from './components/context-create/context-create.component';
import { ContextListItemComponent } from './components/context-list-item/context-list-item.component';
import { ContextListComponent } from './components/context-list/context-list.component';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { ContextItemDomainModule } from './domain/context-item-domain.module';

@NgModule({
  declarations: [AppContainer, ContextCreateComponent, ContextListItemComponent, ContextListComponent],
  imports: [BrowserModule, StoreModule.forRoot({}), ReactiveFormsModule, ContextItemDomainModule],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule {
}
