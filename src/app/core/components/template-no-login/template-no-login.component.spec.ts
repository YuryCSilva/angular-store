import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNoLoginComponent } from './template-no-login.component';

describe('TemplateNoLoginComponent', () => {
  let component: TemplateNoLoginComponent;
  let fixture: ComponentFixture<TemplateNoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateNoLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateNoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
