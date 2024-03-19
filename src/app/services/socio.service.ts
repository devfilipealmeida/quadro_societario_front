import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socio } from '../interfaces/Socio';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/partners`;

  constructor(private http: HttpClient) { }

  createSocio(data: Socio): Observable<Socio> {
    return this.http.post<Socio>(this.apiUrl, data);
  }

  deleteByCpf(cpf: string): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/remove/cpf/${cpf}`);
  }

  getByCpf(cpf: string): Observable<Socio> {
    return this.http.get<Socio>(`${this.apiUrl}/cpf/${cpf}`);
  }

  updateSocio(data: Socio): Observable<Socio> {
    const cpfToUrl = String(data.cpf);
    return this.http.put<Socio>(`${this.apiUrl}/${cpfToUrl}`, data);
  }
}
