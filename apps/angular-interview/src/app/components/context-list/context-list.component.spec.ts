import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ContextListComponent} from './context-list.component';
import { ContextItem } from '../../domain/models/context-item.model';

describe('ContextListComponent', () => {
  let fixture: ComponentFixture<ContextListComponent>;
  let component: ContextListComponent;

  const ITEM_SELECTOR = By.css('tm-context-list-item');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        ContextListComponent
      ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextListComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should render multiple context list items', () => {
    component.contextItems = [
      {
        name: 'Gold',
        type: 'Batch'
      } as ContextItem,
      {
        name: 'Pizza',
        type: 'Information'
      } as ContextItem
    ];
    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(ITEM_SELECTOR);

    expect(items.length).toBe(2);

    expect(items[0].properties.contextItem).toEqual(component.contextItems[0]);
    expect(items[1].properties.contextItem).toEqual(component.contextItems[1]);
  });

});
