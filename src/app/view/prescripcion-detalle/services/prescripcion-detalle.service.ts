import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PrescripcionDetalleWrapper, RequestWrapper } from '../interfaces';
import { PrescripcionDetalle } from '@app-models/index';

@Injectable({
  providedIn: 'root'
})
export class PrescripcionDetalleService {

  private url$ = environment.apiUrl + '/prescripcion-detalle';

  constructor(
    private _http: HttpClient,
  ) { }

  index() {
    return this._http
      .get<PrescripcionDetalle[]>(`${this.url$}`);
  }

  show(id: number) {
    return this._http
      .get<PrescripcionDetalle>(`${this.url$}/${id}`);
  }

  create(p: PrescripcionDetalle) {
    return this._http
      .post<PrescripcionDetalle>(`${this.url$}`, p);
  }

  update(p: PrescripcionDetalle) {
    return this._http
      .patch<PrescripcionDetalle>(`${this.url$}/${p.id}`, p);
  }

  destroy(id: number) {
    return this._http
      .delete<number>(`${this.url$}/${id}`);
  }

  indexJunta(wrapper: RequestWrapper) {
    return this._http
      .get<PrescripcionDetalleWrapper>(`${this.url$}/junta/${wrapper.perPage}/${wrapper.page}/${wrapper.juntaId}`);
  }
}
