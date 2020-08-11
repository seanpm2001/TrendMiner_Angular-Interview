import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AppContainer } from './app.container';
import { ReplaySubject } from 'rxjs';
import { ContextItemFacade } from '../domain/facades/context-item.facade';
import { ContextItem } from '../domain/models/context-item.model';

describe('AppContainer', () => {
  let fixture: ComponentFixture<AppContainer>;
  let component: AppContainer;
  let contextItemFacade: jest.Mocked<ContextItemFacade>;

  const LIST_SELECTOR = By.css('tm-context-list');
  const LOADING_SELECTOR = By.css('#loading');
  const CREATE_SELECTOR = By.css('tm-context-create');

  let contextItems$;
  let isLoading$;

  beforeEach(async(() => {
    contextItems$ = new ReplaySubject();
    isLoading$ = new ReplaySubject();

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppContainer
      ],
      providers: [
        {
          provide: ContextItemFacade,
          useValue: {
            contextItems$: contextItems$.asObservable(),
            isLoading$: isLoading$.asObservable(),
            loadContextItems: jest.fn(),
            createContextItem: jest.fn()
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContainer);
    component = fixture.debugElement.componentInstance;
    contextItemFacade = TestBed.inject(ContextItemFacade) as jest.Mocked<ContextItemFacade>;
  });

  describe('When displaying the container', () => {
    it('should have a list with context-items', () => {
      const contextItems = [
        {
          name: 'Gold',
          type: 'Batch'
        } as ContextItem,
        {
          name: 'Pizza',
          type: 'Information'
        } as ContextItem
      ];
      contextItems$.next(contextItems);

      fixture.detectChanges();

      const list = fixture.debugElement.query(LIST_SELECTOR);

      expect(list.properties.contextItems).toEqual(contextItems);
    });

    it('should fetch contextItems', () => {
      fixture.detectChanges();

      expect(contextItemFacade.loadContextItems).toHaveBeenCalled();
    });

    describe('given the app is loading', () => {
      it('should display loading', () => {
        isLoading$.next(true);
        fixture.detectChanges();

        const loading = fixture.debugElement.query(LOADING_SELECTOR);

        expect(loading).not.toBeNull();
      });
    });
  });

  describe('When creating a context item', () => {
    it('should use the facade to create a context item', () => {
      fixture.detectChanges();

      const contextItem = { name: 'Gold', type: 'Batch' } as ContextItem;
      const create = fixture.debugElement.query(CREATE_SELECTOR);
      create.triggerEventHandler('create', contextItem);

      expect(contextItemFacade.createContextItem).toHaveBeenCalledWith(contextItem);
    });
  });
});
