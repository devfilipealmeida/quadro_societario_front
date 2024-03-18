import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpresaComponentComponent } from './form-empresa-component.component';

describe('FormEmpresaComponentComponent', () => {
  let component: FormEmpresaComponentComponent;
  let fixture: ComponentFixture<FormEmpresaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEmpresaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEmpresaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
