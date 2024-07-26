import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  private loadingService = inject(LoadingService);  
  protected isLoading: Subject<boolean> = this.loadingService.isLoading;
  
}
