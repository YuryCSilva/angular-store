import { Component, inject } from '@angular/core';
import { LoginTexts } from '../../login-texts';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validations } from 'src/app/shared/classes/validations.class';
import { Form } from 'src/app/shared/classes/form.class';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.scss'
})
export class FormRegisterComponent extends Form{
  override texts = LoginTexts;
  toastr = inject(ToastrService);

  constructor(private fb: FormBuilder) {
    super(fb);
    this.createForm();
  }

  createForm(): void {
    if(this.form) return;

    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),    
      confirmPassword: new FormControl('', Validators.required)
    }, {
      validators: Validations.isPasswordEquals('password', 'confirmPassword')
    })

    this.generateControlNames();
  }

  save() {
    this.isFormSend = true;

    if(this.formIsInvalid){
      this.toastr.error('Preencha todos os campos corretamente!', 'Ops');
      return
    } 

    return this.form.getRawValue();
  }
}
