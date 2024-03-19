import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, Data } from '../interfaces/Empresa';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/corporations`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Data> {
    return this.http.get<Data>(this.apiUrl);
  }

  getEmpresaById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${id}`);
  }

  createEmpresa(data: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, data);
  }

  getById(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${id}`);
  }

  updateEmpresa(data: Company, empresaId: number): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/${empresaId}`, data);
  }
}
