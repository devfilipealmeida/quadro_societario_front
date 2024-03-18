import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEmpresaComponentComponent } from './detalhes-empresa-component.component';

describe('DetalhesEmpresaComponentComponent', () => {
  let component: DetalhesEmpresaComponentComponent;
  let fixture: ComponentFixture<DetalhesEmpresaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesEmpresaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesEmpresaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
