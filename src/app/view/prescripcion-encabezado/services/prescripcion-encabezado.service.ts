import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Prescripcion, ImportarxFecha } from '@app-models/index';

@Injectable({
  providedIn: 'root'
})
export class PrescripcionEncabezadoService {

  private url$ = environment.apiUrl + '/prescripcion-encabezado';

  constructor(
    private _http: HttpClient,
  ) { }

  index() {
    return this._http
      .get<Prescripcion[]>(this.url$);
  }

  show(id) {
    return this._http
      .get<Prescripcion>(`${this.url$}/${id}`);
  }

  create(p: Prescripcion) {
    return this._http
      .post<Prescripcion>(`${this.url$}`, p);
  }

  update(p: Prescripcion) {
    return this._http
      .patch<Prescripcion>(`${this.url$}/${p.id}`, p);
  }


  destroy(id: number) {
    return this._http
      .delete<Prescripcion>(`${this.url$}/${id}`);
  }

  importarFecha(data: ImportarxFecha) {
    return this._http
      .post(`${this.url$}/importarxFecha`, data);
  }

}
