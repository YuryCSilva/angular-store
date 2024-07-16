import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITexts } from 'src/app/types/interfaces/texts.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  protected form!: FormGroup;
  protected isFormSend: boolean = false;
  controlNames!: string[];
  texts!: ITexts;

  protected resetForm(resetObject: {[k in keyof string]: string} | {} = {}){ 
    let formToResetValue: any = {}
    ;

    Object.keys(this.form.getRawValue()).forEach((control) => {
      if(!(control in resetObject)) formToResetValue[control] = '';
    })

    formToResetValue = {...formToResetValue, ...resetObject};

    this.form.reset(formToResetValue);
  }

  protected generateControlNames() {
    this.controlNames = Object.keys(this.form.controls);
  }

  protected getErrorMessage(control: string, form?: FormGroup) {
    if(!form) form = this.form;

    const errorName = Object.keys(form.controls[control].errors || {})[0];

    let message = '';

    
    try{
      if(form.controls[control].errors && this.texts.form.errors[control] && this.texts.form.errors[control][errorName]) message = this.texts.form.errors[control][errorName];
    } catch (error) { }

    return message;
  }

  protected isControlInvalid(control: string) {
    const _form = this.form;
    return (
      (_form.controls[control].invalid &&
        _form.controls[control].touched) ||
      (_form.controls[control].invalid && this.isFormSend)
    );
  }
}
