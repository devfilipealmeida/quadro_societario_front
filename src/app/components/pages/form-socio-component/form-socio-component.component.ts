import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SocioService } from '../../../services/socio.service';
import { MessagesService } from '../../../services/messages.service';
import { Socio } from '../../../interfaces/Socio';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-socio-component',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, ReactiveFormsModule],
  templateUrl: './form-socio-component.component.html',
  styleUrl: './form-socio-component.component.css'
})
export class FormSocioComponentComponent  implements OnInit{
  isEditMode = false;
  socioCpf: string | null = null;
  empresaId: number = 0;
  socio: Socio = {
    name: '',
    cpf: '',
    qualification: '',
    entry: '',
  };

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private socioService: SocioService, 
    private messagesService: MessagesService
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      if (params.has('id')) {
        this.empresaId = +params.get('id');
      } else if (params.has('cpf')) {
        this.isEditMode = true;
        this.getByCpf(params.get('cpf'));
      }
    });
  }

  backToHome() {
    this.router.navigate(['home']);
  }

  submitForm(event: Event): void {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
    const qualification = (document.getElementById('qualification') as HTMLInputElement).value;
    const entry = (document.getElementById('entry') as HTMLInputElement).value;
    const corporation_id = this.empresaId;

    const data = {
      name,
      cpf: cpf.replace(/\D/g, ''),
      qualification,
      entry,
      corporation_id
    };

    if(this.isEditMode) {
      this.socioService.updateSocio(data).subscribe();

      this.messagesService.add('Sócio atualizado com sucesso.');
  
      this.router.navigate(['home']);
    } else {
      this.socioService.createSocio(data).subscribe();
  
      this.messagesService.add('Sócio adicionado com sucesso.');
  
      this.router.navigate(['home']);
    }
  }

  getByCpf(cpf: string) {
    this.socioService.getByCpf(cpf).subscribe((socio) => {
      this.socio = socio;
      this.populateFormFields();
    });
  }

  populateFormFields() {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const cpfInput = document.getElementById('cpf') as HTMLInputElement;
    const qualificationInput = document.getElementById('qualification') as HTMLInputElement;
    const entryInput = document.getElementById('entry') as HTMLInputElement;
  
    nameInput.value = this.socio.name;
    cpfInput.value = this.socio.cpf;
    qualificationInput.value = this.socio.qualification;

    const stringDate = new Date(this.socio.entry);
    const dia = stringDate.getDate().toString().padStart(2, '0');
    const mes = (stringDate.getMonth() + 1).toString().padStart(2, '0');
    const ano = stringDate.getFullYear().toString();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    entryInput.value = dataFormatada;
  }
}
