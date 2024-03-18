import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { EmpresaService } from '../../../services/empresa.service';
import { Company } from '../../../interfaces/Empresa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-empresa-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-empresa-component.component.html',
  styleUrl: './detalhes-empresa-component.component.css'
})
export class DetalhesEmpresaComponentComponent {
  empresa: Company = {
    id: 0,
    responsible_company: "",
    cpf: "",
    birth_date: new Date() || null,
    fantasy_name: "",
    cnpj: "",
    address: "",
    neighborhood: "",
    complement: "",
    city: "",
    state: "",
  };

  constructor(private router: Router, private empresaService: EmpresaService, private routeId: ActivatedRoute) {
    this.getEmpresa();
  }

  goToFormSocio(empresaId: number) {
    this.router.navigate(['cadastro/socio', { id: empresaId }]);
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  formataCnpj(cnpj: string): string {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }

  formatarCPF(cpf: string): string {
    cpf = cpf.replace(/\D/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  getEmpresa() {
    const id = Number(this.routeId.snapshot.paramMap.get("id"));
    this.empresaService.getEmpresaById(id).subscribe((empresa) => (this.empresa = empresa));
  }
}
