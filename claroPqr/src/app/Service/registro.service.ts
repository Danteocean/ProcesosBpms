import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registro } from '../Models/RegistrarCliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  myAppUrl = 'https://localhost:44345/';
  myApiUrl = 'api/Cliente/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  guardarClientes(registro: Registro) : Observable<Registro>{
    return this.http.post<Registro>(this.myAppUrl + this.myApiUrl, registro, this.httpOptions);

  }
}
