import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaService } from '../../../services/empresa.service';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {

  constructor(private router: Router, private empresaService: EmpresaService) {}

  empresas = [
    { responsavel: 'João Cirino', nomeFantasia: 'Tectoy Indústria de Eletrônicos', cnpj: '33942192000104' },
    { responsavel: 'Filipe Almeida', nomeFantasia: 'Fatech Tecnologia', cnpj: '33942192000105' },
    { responsavel: 'Noah Almeida', nomeFantasia: 'Noahzin Eletrônics Industries', cnpj: '33942192000106' }
  ];

  formataCnpj(cnpj: string): string {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }

  redirectToCadastroEmpresa() {
    this.router.navigate(['/cadastro/empresa']);
  }
}
