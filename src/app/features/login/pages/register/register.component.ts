import { Component, EventEmitter, inject } from '@angular/core';
import { TemplateNoLoginComponent } from '../../../../core/components/template-no-login/template-no-login.component';
import { BackNextButtonsComponent } from 'src/app/shared/components/back-next-buttons/back-next-buttons.component';
import { Router } from '@angular/router';
import { FormRegisterComponent } from '../../components/form-register/form-register.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [TemplateNoLoginComponent, FormRegisterComponent, BackNextButtonsComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  router = inject(Router);

  handleBackClickEvent(e: Event) {
    this.router.navigate(['/login'])
  }

  handleNextClickEvent(e: Event) {
    console.log('avançar')
  }
}
