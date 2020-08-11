import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ContextCreateComponent} from './context-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContextItem } from '../../domain/models/context-item.model';

describe('ContextCreateComponent', () => {
  let fixture: ComponentFixture<ContextCreateComponent>;
  let component: ContextCreateComponent;

  const CREATE_BUTTON = By.css('.create__button');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        ContextCreateComponent
      ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextCreateComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the ContextCreateComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('When creating a context item', () => {

    it('should have 2 options for the type dropdown', () => {
      fixture.detectChanges();
      expect(component.optionsList).toEqual([
        'Batch',
        'Information'
      ]);
    });

    it('should require the name and type', () => {
      fixture.detectChanges();

      expect(component.formGroup.invalid).toBeTruthy();

      component.formGroup.get('name').setValue('Gold');
      component.formGroup.get('type').setValue('Batch');
      fixture.detectChanges();

      expect(component.formGroup.invalid).toBeFalsy();

    });

    describe('given the form is not valid', () => {
      it('should disable the button', () => {
        fixture.detectChanges();

        const button = fixture.debugElement.query(CREATE_BUTTON);

        expect(button.properties.disabled).toBeTruthy();
      });
    });

    describe('given the form is valid', () => {
      it('should emit the create event', () => {
        spyOn(component.create, 'emit');
        fixture.detectChanges();

        component.formGroup.get('name').setValue('Gold');
        component.formGroup.get('type').setValue('Batch');
        fixture.detectChanges();
        const button = fixture.debugElement.query(CREATE_BUTTON);

        button.triggerEventHandler('click', {});

        expect(component.create.emit).toHaveBeenCalledWith({
          name: 'Gold',
          type: 'Batch'
        } as ContextItem);
      });
    });
  });
});
