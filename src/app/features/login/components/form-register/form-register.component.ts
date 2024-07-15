import { Component, inject } from '@angular/core';
import { LoginTexts } from '../../login-texts';
import { FormComponent } from 'src/app/shared/components/form/form.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IForm } from 'src/types/interfaces/form.interface';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.scss'
})
export class FormRegisterComponent extends FormComponent implements IForm{
  texts = LoginTexts;
  fb = inject(FormBuilder);
  inputs = ['name', 'email', 'password'];

  constructor(){
    super();
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)    
    })
  }
}
