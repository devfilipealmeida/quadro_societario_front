import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSocioComponentComponent } from './form-socio-component.component';

describe('FormSocioComponentComponent', () => {
  let component: FormSocioComponentComponent;
  let fixture: ComponentFixture<FormSocioComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSocioComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSocioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
