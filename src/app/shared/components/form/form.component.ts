import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form!: FormGroup;

  resetForm(resetObject: {[k in keyof string]: string}){ 
    let formToResetValue: any = {}
    ;

    Object.keys(this.form.getRawValue()).forEach((control) => {
      if(!(control in resetObject)) formToResetValue[control] = '';
    })

    formToResetValue = {...formToResetValue, ...resetObject};

    this.form.reset(formToResetValue);
  }
}
