import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SocioService } from '../../../services/socio.service';
import { MessagesService } from '../../../services/messages.service';
import { Socio } from '../../../interfaces/Socio';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { adjustDateFormat, dateToString } from '../../../utils/js_functions';

@Component({
  selector: 'app-form-socio-component',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, ReactiveFormsModule],
  templateUrl: './form-socio-component.component.html',
  styleUrl: './form-socio-component.component.css'
})
export class FormSocioComponentComponent  implements OnInit{
  formPartner!: FormGroup;
  isEditMode = false;
  socioCpf: string | null = null;
  empresaId: number = 0;

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private socioService: SocioService, 
    private messagesService: MessagesService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      if (params.has('id')) {
        this.empresaId = +params.get('id');
      } else if (params.has('idToAdd') & params.has('cpf')) {
        this.isEditMode = true;
        this.getByCpf(params.get('cpf'));
        this.empresaId = +params.get('idToAdd');
      }
    });

    this.formPartner = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      qualification: ['', Validators.required],
      entry: [this.isEditMode ? '' : '', this.isEditMode ? null : Validators.required],
      corporation_id: [''],
    });
  }

  backToHome() {
    this.router.navigate(['home']);
  }

  submitForm(event: Event): void {
    event.preventDefault();

    if (this.formPartner.valid) {
      this.messagesService.add('Formulário válido. Enviando dados...')
    } else {
      return this.messagesService.add('Por favor, preencha todos os campos corretamente.');
    }

    const formPartnerValues = this.formPartner.value;

    formPartnerValues.cpf = formPartnerValues.cpf.replace(/\D/g, '');
    {!this.isEditMode ? formPartnerValues.entry = adjustDateFormat(formPartnerValues.entry) : null}
    formPartnerValues.corporation_id = this.empresaId;

    if(this.isEditMode) {
      this.socioService.updateSocio(formPartnerValues).subscribe();
      this.messagesService.add('Sócio atualizado com sucesso.');
      this.router.navigate(['home']);
    } else {
      this.socioService.createSocio(formPartnerValues).subscribe();
      this.messagesService.add('Sócio adicionado com sucesso.');
      this.router.navigate(['home']);
    }
  }

  getByCpf(cpf: string) {
    this.socioService.getByCpf(cpf).subscribe((socio) => {
      this.populateFormFields(socio);
    });
  }

  populateFormFields(socio: Socio) {
    this.formPartner.patchValue({
      name: socio.name,
      cpf: socio.cpf,
      qualification: socio.qualification,
      entry: dateToString(socio.entry),
    });
  }
}
