import { Component, EventEmitter, inject, ViewChild } from '@angular/core';
import { TemplateNoLoginComponent } from '../../../../core/components/template-no-login/template-no-login.component';
import { BackNextButtonsComponent } from 'src/app/shared/components/back-next-buttons/back-next-buttons.component';
import { Router } from '@angular/router';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';
import { Register } from './register.class';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../login.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  loginService = inject(LoginService);
  toastr = inject(ToastrService);
  
  handleBackClickEvent(e: Event) {
    this.router.navigate(['/login'])
  }

  handleNextClickEvent(e: Event) {
    const form = this.formRegister.save();
    
    if(!form) return;

    this.register(form)
  }

  register(data: Register) { 
    const register = new Register(data);

    this.loginService.register(register.sanitizeToSend()).subscribe({
      next: (response) => {
        // this.toastr.success(`${response.name} registrado com sucesso.`, 'Parabéns');
        this.router.navigate(['/login'])
      },
      error: (error: HttpErrorResponse) => {
        this.toastr.error(error.error.message, 'Ops');
      }
    })
  }
}
