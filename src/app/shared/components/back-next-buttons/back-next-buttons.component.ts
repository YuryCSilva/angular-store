import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-back-next-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-next-buttons.component.html',
  styleUrl: './back-next-buttons.component.scss'
})
export class BackNextButtonsComponent {
  @Output() backClicked = new EventEmitter();
  @Output() nextClicked = new EventEmitter();
  @Input() backButtonName = 'Voltar';
  @Input() nextButtonName = 'Avançar';
  @Input() nextDisabled = false;

  HandleBackClicked(){
    this.backClicked.emit();
  }

  HandleNextClicked(){
    if(this.nextDisabled) return
    this.nextClicked.emit();
  }
}
