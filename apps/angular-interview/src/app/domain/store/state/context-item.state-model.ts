import { ContextItem } from '../../models/context-item.model';

export interface State {
  contextItems: Array<ContextItem>;
  loading: boolean;
}
