import { Component, Input } from '@angular/core';
import { ContextItem } from '../../domain/models/context-item.model';

@Component({
  selector: 'tm-context-list',
  template: `
    <div class='context-list'>
      <h2>The context list</h2>
      <ul class='context-list__list'>
        <li class='context-list__item' *ngFor='let contextItem of contextItems'>
          <tm-context-list-item [contextItem]='contextItem'></tm-context-list-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./context-list.component.scss']
})
export class ContextListComponent {
  @Input() contextItems: Array<ContextItem>;
}
