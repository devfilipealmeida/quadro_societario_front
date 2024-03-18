import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, Empresa } from '../interfaces/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/corporations`);
  }

  getEmpresaById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/corporations/${id}`);
  }

  createEmpresa(data: Company): Observable<Company> {
    console.log('service', data)
    return this.http.post<Company>(`${this.apiUrl}/corporations`, data);
  }
}
