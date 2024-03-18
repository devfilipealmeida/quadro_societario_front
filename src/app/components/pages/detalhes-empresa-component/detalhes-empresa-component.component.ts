import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detalhes-empresa-component',
  standalone: true,
  imports: [],
  templateUrl: './detalhes-empresa-component.component.html',
  styleUrl: './detalhes-empresa-component.component.css'
})
export class DetalhesEmpresaComponentComponent {

  constructor(private router: Router) {}

  goToFormSocio() {
    this.router.navigate(['cadastro/socio']);
  }
}
