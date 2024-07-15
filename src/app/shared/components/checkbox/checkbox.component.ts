import { Component, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent extends InputComponent {
  @Input() override containerClass = 'mb-0';
  @Input() override inputClass = 'me-2';
}
