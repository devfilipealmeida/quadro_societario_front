import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa.service';
import { MessagesService } from '../../../services/messages.service';
import { Company } from '../../../interfaces/Empresa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-empresa-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-empresa-component.component.html',
  styleUrl: './form-empresa-component.component.css'
})
export class FormEmpresaComponentComponent implements OnInit{
  isEditMode = false;
  empresaId: number = 0;
  empresa: Company = {
    responsible_company: '',
    cpf: '',
    birth_date: '',
    fantasy_name: '',
    cnpj: '',
    address: '',
    neighborhood: '',
    complement: '',
    city: '',
    state: ''
  };

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private empresaService: EmpresaService, 
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      if (params.has('id')) {
        this.isEditMode = true;
        this.empresaId = params.get('id');
        this.getById(params.get('id'));
      }
    });
  }

  backToHome() {
    this.router.navigate(['home']);
  }

  submitForm(event: Event): void {
    event.preventDefault();

    const responsible_company = (document.getElementById('responsible_company') as HTMLInputElement).value;
    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
    const birth_date = (document.getElementById('birth_date') as HTMLInputElement).value;
    const fantasy_name = (document.getElementById('fantasy_name') as HTMLInputElement).value;
    const cnpj = (document.getElementById('cnpj') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const neighborhood = (document.getElementById('neighborhood') as HTMLInputElement).value;
    const complement = (document.getElementById('complement') as HTMLInputElement).value;
    const city = (document.getElementById('city') as HTMLInputElement).value;
    const state = (document.getElementById('state') as HTMLInputElement).value;

    const data = {
      responsible_company,
      cpf,
      birth_date,
      fantasy_name,
      cnpj,
      address,
      neighborhood,
      complement,
      city,
      state
    };

    if(this.isEditMode) {
      this.empresaService.updateEmpresa(data, this.empresaId).subscribe();
  
      this.messagesService.add('Empresa atualizada com sucesso.');
  
      this.router.navigate(['home']);
    } else {
      this.empresaService.createEmpresa(data).subscribe();
  
      this.messagesService.add('Empresa cadastrada com sucesso.');
  
      this.router.navigate(['home']);
    }

  }

  getById(id: number) {
    this.empresaService.getById(id).subscribe((empresa) => {
      this.empresa = empresa;
      this.populateFormFields();
    });
  }

  populateFormFields() {
    const responsible_company = document.getElementById('responsible_company') as HTMLInputElement;
    const cpf = document.getElementById('cpf') as HTMLInputElement;
    const birth_date = document.getElementById('birth_date') as HTMLInputElement;
    const fantasy_name = document.getElementById('fantasy_name') as HTMLInputElement;
    const cnpj = document.getElementById('cnpj') as HTMLInputElement;
    const address = document.getElementById('address') as HTMLInputElement;
    const neighborhood = document.getElementById('neighborhood') as HTMLInputElement;
    const complement = document.getElementById('complement') as HTMLInputElement;
    const city = document.getElementById('city') as HTMLInputElement;
    const state = document.getElementById('state') as HTMLInputElement;

    responsible_company.value = this.empresa.fantasy_name;
    cpf.value = this.empresa.cpf;
    fantasy_name.value = this.empresa.fantasy_name;
    cnpj.value = this.empresa.cnpj;
    address.value = this.empresa.address;
    neighborhood.value = this.empresa.neighborhood,
    complement.value = this.empresa.complement,
    city.value = this.empresa.city;
    state.value = this.empresa.state;
    

    const stringDate = new Date(this.empresa.birth_date);
    const dia = stringDate.getDate().toString().padStart(2, '0');
    const mes = (stringDate.getMonth() + 1).toString().padStart(2, '0');
    const ano = stringDate.getFullYear().toString();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    birth_date.value = dataFormatada;
  }
}
