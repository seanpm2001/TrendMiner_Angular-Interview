import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContextItem } from '../../domain/models/context-item.model';

//TODO: #2 Make sure you can add context items

@Component({
  selector: 'tm-context-create',
  template: `
    <div class='create' [formGroup]='formGroup'>
      <h2>Create a Context</h2>
      <div class='create__form'>
        <div class='create__form-element'>
          <label>
            Name
            <input class='create__input' formControlName='name'/>
          </label>
        </div>
        <div class='create__form-element'>
          <label>
            Type
            <select class='create__input' formControlName='type'>
              <option *ngFor='let optionItem of optionsList' [ngValue]='optionItem'>{{ optionItem }}</option>
            </select>
          </label>
        </div>
      </div>
      <button class='create__button' [disabled]='formGroup.invalid'>Create</button>
    </div>
  `,
  styleUrls: ['./context-create.component.scss']
})
export class ContextCreateComponent implements OnInit {
  @Output() create = new EventEmitter<ContextItem>();

  formGroup: FormGroup;

  readonly optionsList = [
    'Batch',
    'Information'
  ];

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      type: [null, [Validators.required]]
    });
  }

}
