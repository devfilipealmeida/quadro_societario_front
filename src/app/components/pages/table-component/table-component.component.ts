import { Router, RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaService } from '../../../services/empresa.service';
import { Company } from '../../../interfaces/Empresa';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent implements OnInit{

  ngOnInit(): void {
    this.getEmpresas();
  }

  constructor(private router: Router, private empresaService: EmpresaService) {}

  empresas: Company[] = []

  formataCnpj(cnpj: string): string {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }

  redirectToCadastroEmpresa() {
    this.router.navigate(['/cadastro/empresa']);
  }

  getEmpresas(): void {
    this.empresaService.getAll().subscribe((empresa) =>{
      this.empresas = empresa.data
    });
  }
}
