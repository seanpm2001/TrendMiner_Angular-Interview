import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContextItem} from '../models/context-item.model';
import {Observable} from 'rxjs';

@Injectable()
export class ContextItemService {

  constructor(private http: HttpClient) {

  }

  getContextItems(): Observable<Array<ContextItem>> {
    return this.http.get<Array<ContextItem>>('/api/context');
  }

  createContextItem(contextItem: ContextItem): Observable<ContextItem> {
    return this.http.post<ContextItem>('/api/context', contextItem);
  }
}
