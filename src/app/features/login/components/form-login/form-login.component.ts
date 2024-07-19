import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Form } from 'src/app/shared/classes/form.class';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { ITexts } from 'src/app/types/interfaces/texts.interface';
import { LoginTexts } from '../../login-texts';
import { CheckboxComponent } from 'src/app/shared/components/checkbox/checkbox.component';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, CheckboxComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.scss'
})
export class FormLoginComponent extends Form {
  override texts = LoginTexts;
  constructor(private fb: FormBuilder) {
    super(fb);
    this.createForm();
  }

  createForm(): void {
    if(this.form) return;
    
    this.form = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),  
      remember: new FormControl(false),  
    })

    this.generateControlNames(['remember']);
  }

  save() {
    this.isFormSend = true;

    if(this.formIsInvalid) return;

    return this.form.getRawValue();
  }

}
