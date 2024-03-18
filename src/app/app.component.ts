import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { TableComponentComponent } from './components/pages/table-component/table-component.component';
import { FormEmpresaComponentComponent } from './components/pages/form-empresa-component/form-empresa-component.component';
import { FormSocioComponentComponent } from './components/pages/form-socio-component/form-socio-component.component';
import { DetalhesEmpresaComponentComponent } from './components/pages/detalhes-empresa-component/detalhes-empresa-component.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponentComponent,
    TableComponentComponent,
    FormEmpresaComponentComponent,
    FormSocioComponentComponent,
    DetalhesEmpresaComponentComponent,
    RouterOutlet,
    MessagesComponent,
    NgxMaskDirective,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quadro_societario_front';
}
