import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ContextListItemComponent} from './context-list-item.component';
import { ContextItem } from '../../domain/models/context-item.model';

describe('ContextListItemComponent', () => {
  let fixture: ComponentFixture<ContextListItemComponent>;
  let component: ContextListItemComponent;

  const ITEM_SELECTOR = By.css('.item');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        ContextListItemComponent
      ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextListItemComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should display the name and type', () => {
    component.contextItem =
      {
        name: 'Gold',
        type: 'Batch'
      } as ContextItem;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
