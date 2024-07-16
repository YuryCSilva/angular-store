import { Component, EventEmitter, inject, ViewChild } from '@angular/core';
import { TemplateNoLoginComponent } from '../../../../core/components/template-no-login/template-no-login.component';
import { BackNextButtonsComponent } from 'src/app/shared/components/back-next-buttons/back-next-buttons.component';
import { Router } from '@angular/router';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';
import { Register } from './register.class';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TemplateNoLoginComponent, FormRegisterComponent, BackNextButtonsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @ViewChild('formRegister') formRegister!: FormRegisterComponent;

  router = inject(Router);
  
  handleBackClickEvent(e: Event) {
    this.router.navigate(['/login'])
  }

  handleNextClickEvent(e: Event) {
    const form = this.formRegister.save();
    
    if(!form) return;

    const register = new Register(form);


  }

  register() { }
}
