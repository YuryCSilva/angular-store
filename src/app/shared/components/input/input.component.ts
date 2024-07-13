import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() id = '';
  @Input() name = this.id;
  @Input() label = '';
  @Input() invalidFeedback = '';
  @Input() containerClass = 'mb-4';
  @Input() inputClass = 'form-control-lg';
  @Input() formGroup!: FormGroup;
}
