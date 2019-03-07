import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AmbitoAtencion } from '../../models/ambito-atencion';

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

  show(id: number) {
    return this.http.get<AmbitoAtencion>(`${this.url}/${id}`);
  }

  create(element: AmbitoAtencion) {
    return this.http.post<AmbitoAtencion>(this.url, element);
  }

  update(element: AmbitoAtencion) {
    return this.http.put<AmbitoAtencion>(`${this.url}/${element.id}`, element);
  }

  destroy(id: number) {
    return this.http.delete<AmbitoAtencion>(`${this.url}/${id}`);
  }
}
