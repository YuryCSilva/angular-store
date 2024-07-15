import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../../core/components/footer/footer.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckboxComponent } from '../../../../shared/components/checkbox/checkbox.component';
import { TemplateNoLoginComponent } from '../../../../core/components/template-no-login/template-no-login.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, InputComponent, ReactiveFormsModule, CheckboxComponent, TemplateNoLoginComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit { 
  form!: FormGroup;	
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl(false)
    });
  }
}
