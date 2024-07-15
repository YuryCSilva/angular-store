import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-no-login',
  standalone: true,
  imports: [],
  templateUrl: './template-no-login.component.html',
  styleUrl: './template-no-login.component.scss'
})
export class TemplateNoLoginComponent {
  @Input() imgSource = '';
  @Input() imgDescription = '';
}
