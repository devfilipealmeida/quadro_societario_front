import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { EmpresaService } from '../../../services/empresa.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-form-empresa-component',
  standalone: true,
  imports: [],
  templateUrl: './form-empresa-component.component.html',
  styleUrl: './form-empresa-component.component.css'
})
export class FormEmpresaComponentComponent {

  constructor(private router: Router, private empresaService: EmpresaService, private messagesService: MessagesService) {}

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

    this.empresaService.createEmpresa(data).subscribe();

    this.messagesService.add('Empresa cadastrada com sucesso.');

    this.router.navigate(['home']);
  }
}
