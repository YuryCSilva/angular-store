import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from '../../../../core/components/footer/footer.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxComponent } from '../../../../shared/components/checkbox/checkbox.component';
import { TemplateNoLoginComponent } from '../../../../core/components/template-no-login/template-no-login.component';
import { RouterLink } from '@angular/router';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { BackNextButtonsComponent } from 'src/app/shared/components/back-next-buttons/back-next-buttons.component';
import { Login } from './login.class';
import { LoginService } from '../../login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, TemplateNoLoginComponent, BackNextButtonsComponent, FormLoginComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent { 
  @ViewChild('formLogin') formLogin!: FormLoginComponent;

  loginService = inject(LoginService);
  toastr = inject(ToastrService);

  handleBackClickEvent(e: Event) {
    // this.router.navigate(['/login'])
  }

  handleNextClickEvent(e: Event) {
    const form = this.formLogin.save();
    
    if(!form) return;

    this.login(form)
  }

  login(data: Login) {
    const login = new Login(data);

    this.loginService.login(login.sanitizeToSend()).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error: HttpErrorResponse) => {
        this.toastr.error(error.error.message, 'Ops');
      }
    })
  }
}
