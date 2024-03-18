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
}
