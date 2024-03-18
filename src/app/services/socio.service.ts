import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socio } from '../interfaces/Socio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private apiUrl = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  createSocio(data: Socio): Observable<Socio> {
    console.log('service', data)
    return this.http.post<Socio>(`${this.apiUrl}/partners`, data);
  }

  deleteByCpf(cpf: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/partners/remove/cpf/${cpf}`);
  }

  getByCpf(cpf: string): Observable<Socio> {
    return this.http.get<Socio>(`${this.apiUrl}/partners/cpf/${cpf}`);
  }

  updateSocio(data: Socio): Observable<Socio> {
    const cpfToUrl = String(data.cpf);
    return this.http.put<Socio>(`${this.apiUrl}/partners/${cpfToUrl}`, data);
  }
}
