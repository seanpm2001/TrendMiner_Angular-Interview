import { Injectable } from '@nestjs/common';
import { ContextItem } from './models/context-item.model';

@Injectable()
export class AppService {
  index = 4;

  items = [
    {
      id: '1',
      name: 'Example1',
      type: 'INFORMATION'
    },
    {
      id: '2',
      name: 'Example2',
      type: 'BATCH'
    },
    {
      id: '3',
      name: 'Example3',
      type: 'INFORMATION'
    }
  ];

  getData(): Array<ContextItem> {
    return this.items;
  }

  postData(contextItem: ContextItem): ContextItem {
    contextItem.id = `${this.index++}`;
    this.items.push(contextItem);

    return contextItem;
  }
}
