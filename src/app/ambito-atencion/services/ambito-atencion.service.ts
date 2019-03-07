import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AmbitoAtencion } from '../models/ambito-atencion';

@Injectable({
  providedIn: 'root'
})
export class AmbitoAtencionService {

  private url = environment.apiUrl + '/ambito-atencion';
  constructor(
    private http: HttpClient,
  ) { }

  findAll() {
    return this.http.get<AmbitoAtencion[]>(this.url);
  }
}
