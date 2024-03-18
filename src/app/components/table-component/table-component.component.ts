import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {
  empresas = [
    { responsavel: 'João Cirino', nomeFantasia: 'Tectoy Indústria de Eletrônicos', cnpj: '33.942.192-0001/04' },
    { responsavel: 'Filipe Almeida', nomeFantasia: 'Fatech Tecnologia', cnpj: '33.942.192-0001/05' },
    { responsavel: 'Noah Almeida', nomeFantasia: 'Noahzin Eletrônics Industries', cnpj: '33.942.192-0001/06' }
  ];
}
