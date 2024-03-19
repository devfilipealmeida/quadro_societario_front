import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../../services/empresa.service';
import { MessagesService } from '../../../services/messages.service';
import { Company } from '../../../interfaces/Empresa';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { adjustDateFormat, dateToString } from '../../../utils/js_functions';

@Component({
  selector: 'app-form-empresa-component',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, ReactiveFormsModule],
  templateUrl: './form-empresa-component.component.html',
  styleUrl: './form-empresa-component.component.css'
})
export class FormEmpresaComponentComponent implements OnInit{
  form!: FormGroup;
  isEditMode = false;
  empresaId: number = 0;
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private empresaService: EmpresaService, 
    private messagesService: MessagesService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      if (params.has('id')) {
        this.isEditMode = true;
        this.empresaId = params.get('id');
        this.getById(params.get('id'));
      }
    });

    this.form = this.formBuilder.group({
      responsible_company: ['', Validators.required],
      cpf: ['', Validators.required],
      birth_date: ['', Validators.required],
      fantasy_name: ['', Validators.required],
      cnpj: ['', Validators.required],
      address: ['', Validators.required],
      neighborhood: ['', Validators.required],
      complement: [''],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
  }

  backToHome() {
    this.router.navigate(['home']);
  }

  submitForm(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {
      this.messagesService.add('Formulário válido. Enviando dados...')
    } else {
      return this.messagesService.add('Por favor, preencha todos os campos corretamente.');
    }

    const formValues = this.form.value;

    formValues.cpf = formValues.cpf.replace(/\D/g, '');
    formValues.cnpj = formValues.cnpj.replace(/\D/g, '');
    formValues.birth_date = adjustDateFormat(formValues.birth_date)

    if(this.isEditMode) {
      this.empresaService.updateEmpresa(formValues, this.empresaId).subscribe(() => {
        this.messagesService.add('Empresa atualizada com sucesso.');
        this.router.navigate(['home']);
      });
    } else {
      this.empresaService.createEmpresa(formValues).subscribe(() => {
        this.messagesService.add('Empresa cadastrada com sucesso.');
        this.router.navigate(['home']);
      });
    }
  }

  getById(id: number) {
    this.empresaService.getById(id).subscribe((empresa) => {
      this.populateFormFields(empresa);
    });
  }

  populateFormFields(empresa: Company) {
    this.form.patchValue({
      responsible_company: empresa.responsible_company,
      cpf: empresa.cpf,
      birth_date: dateToString(empresa.birth_date),
      fantasy_name: empresa.fantasy_name,
      cnpj: empresa.cnpj,
      address: empresa.address,
      neighborhood: empresa.neighborhood,
      complement: empresa.complement,
      city: empresa.city,
      state: empresa.state
    });
  } 
}
