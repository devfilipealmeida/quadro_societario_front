import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-socio-component',
  standalone: true,
  imports: [],
  templateUrl: './form-socio-component.component.html',
  styleUrl: './form-socio-component.component.css'
})
export class FormSocioComponentComponent {

  constructor(private router: Router) {}

  backToHome() {
    this.router.navigate(['home']);
  }
}
