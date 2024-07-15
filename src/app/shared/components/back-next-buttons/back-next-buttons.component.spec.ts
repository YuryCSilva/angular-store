import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackNextButtonsComponent } from './back-next-buttons.component';

describe('BackNextButtonsComponent', () => {
  let component: BackNextButtonsComponent;
  let fixture: ComponentFixture<BackNextButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackNextButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackNextButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
