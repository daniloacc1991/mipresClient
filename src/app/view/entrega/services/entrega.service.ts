import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrega, PrescripcionDetalle } from '@app-models/index';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  private url = environment.apiUrl + '/entrega';

  constructor(
    private http: HttpClient,
  ) { }

  findAll() {
    return this.http.get<Entrega[]>(this.url);
  }

  show(id: number) {
    return this.http.get<Entrega>(`${this.url}/${id}`);
  }

  create(element: Entrega) {
    return this.http.post<Entrega>(this.url, element);
  }

  update(element: Entrega) {
    return this.http.put<Entrega>(`${this.url}/${element.id}`, element);
  }

  destroy(id: number) {
    return this.http.delete<Entrega>(`${this.url}/${id}`);
  }

  loadPrescripcionDetalle(id: number) {
    return this.http.get<PrescripcionDetalle>(`${this.url}/detalle/${id}`);
  }
}
