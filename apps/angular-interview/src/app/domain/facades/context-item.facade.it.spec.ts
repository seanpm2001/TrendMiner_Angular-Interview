import { async, TestBed } from '@angular/core/testing';
import { ContextItemService } from '../services/context-item.service';
import { ContextItem } from '../models/context-item.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { of, Subject } from 'rxjs';
import { ContextItemFacade } from './context-item.facade';
import { readFirst } from '@nrwl/angular/testing';
import { FEATURE_NAME, reducers } from '../store/context-item.store';

describe('ContextItemFacade', () => {
  let facade: ContextItemFacade;
  let contextItemService: jest.Mocked<ContextItemService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(FEATURE_NAME, reducers)
      ],
      providers: [
        ContextItemFacade,
        {
          provide: ContextItemService,
          useValue: {
            getContextItems: jest.fn(),
            createContextItem: jest.fn()
          }
        }
      ]
    });
    facade = TestBed.inject(ContextItemFacade);
    contextItemService = TestBed.inject(ContextItemService) as jest.Mocked<ContextItemService>;
  }));

  describe('When calling loadContextItems', () => {
    it('should set loading to true', async () => {
      contextItemService.getContextItems.mockReturnValue(new Subject());

      facade.loadContextItems();

      const isLoading = await readFirst(facade.isLoading$);
      expect(isLoading).toBeTruthy();
    });

    describe('Given the call is successful', () => {
      let contextItems: Array<ContextItem>;

      beforeEach(() => {
        contextItems = [
          {
            id: '1',
            name: 'Test',
            type: 'type'
          }
        ] as Array<ContextItem>;
      });

      it('should load the context items and store them', async () => {
        contextItemService.getContextItems.mockReturnValue(of(contextItems));

        facade.loadContextItems();

        const loadedContextItems = await readFirst(facade.contextItems$);
        expect(loadedContextItems).toEqual(contextItems);
      });

      it('should set loading to false', async () => {
        contextItemService.getContextItems.mockReturnValue(of(contextItems));

        facade.loadContextItems();

        const isLoading = await readFirst(facade.isLoading$);
        expect(isLoading).toBeFalsy();
      });
    });


  });

  describe('When calling createContextItem', () => {
    it('should create a context item and reload the context items', async () => {
      const contextItem =
        {
          name: 'Test',
          type: 'type'
        } as ContextItem;

      const contextItems = [
        contextItem
      ] as Array<ContextItem>;

      contextItemService.createContextItem.mockReturnValue(of(contextItem));
      contextItemService.getContextItems.mockReturnValue(of(contextItems));

      facade.createContextItem(contextItem);

      expect(contextItemService.createContextItem).toHaveBeenCalledWith(contextItem);

      const loadedContextItems = await readFirst(facade.contextItems$);
      expect(loadedContextItems).toEqual(contextItems);
    });
  });
});
