import { Component, Input } from '@angular/core';
import { ContextItem } from '../../domain/models/context-item.model';

//TODO: #1 Make sure a context item is rendered correctly

@Component({
  selector: 'tm-context-list-item',
  template: `
    <div class='item'>
      -
    </div>`,
  styleUrls: ['./context-list-item.component.scss']
})
export class ContextListItemComponent {
  @Input() contextItem: ContextItem;
}
