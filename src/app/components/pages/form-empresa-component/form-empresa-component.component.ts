import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-empresa-component',
  standalone: true,
  imports: [],
  templateUrl: './form-empresa-component.component.html',
  styleUrl: './form-empresa-component.component.css'
})
export class FormEmpresaComponentComponent {

  constructor(private router: Router) {}

  backToHome() {
    this.router.navigate(['home']);
  }
}
