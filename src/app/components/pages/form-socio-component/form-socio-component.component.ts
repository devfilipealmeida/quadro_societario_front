import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SocioService } from '../../../services/socio.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-form-socio-component',
  standalone: true,
  imports: [],
  templateUrl: './form-socio-component.component.html',
  styleUrl: './form-socio-component.component.css'
})
export class FormSocioComponentComponent  implements OnInit{
  empresaId: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private socioService: SocioService, private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      if (params.has('id')) {
        this.empresaId = +params.get('id');
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
      cpf,
      qualification,
      entry,
      corporation_id
    };

    this.socioService.createSocio(data).subscribe();

    this.messagesService.add('Sócio adicionado com sucesso.');

    this.router.navigate([`detalhes/empresa/${corporation_id}`]);
  }
}
