import { Routes } from '@angular/router';
import { TableComponentComponent } from './components/pages/table-component/table-component.component';
import { FormEmpresaComponentComponent } from './components/pages/form-empresa-component/form-empresa-component.component';
import { FormSocioComponentComponent } from './components/pages/form-socio-component/form-socio-component.component';
import { DetalhesEmpresaComponentComponent } from './components/pages/detalhes-empresa-component/detalhes-empresa-component.component';

export const routes: Routes = [
    { path: '', component: TableComponentComponent },
    { path: 'home', component: TableComponentComponent },
    { path: 'cadastro/empresa', component: FormEmpresaComponentComponent },
    { path: 'cadastro/socio', component: FormSocioComponentComponent },
    { path: 'editar/socio/:cpf', component: FormSocioComponentComponent },
    { path: 'detalhes/empresa/:id', component: DetalhesEmpresaComponentComponent },
];
