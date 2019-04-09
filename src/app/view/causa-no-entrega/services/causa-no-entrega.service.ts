import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CausaNoEntrega } from '@app-models/index';


@Injectable({
  providedIn: 'root'
})
export class CausaNoEntregaService {

  private url = environment.apiUrl + '/causa-no-entrega';

  constructor(
    private http: HttpClient,
  ) { }

  index() {
    return this.http.get<CausaNoEntrega[]>(this.url);
  }

  show(id: number) {
    return this.http.get<CausaNoEntrega>(`${this.url}/${id}`);
  }

  create(element: CausaNoEntrega) {
    return this.http.post<CausaNoEntrega>(this.url, element);
  }

  update(element: CausaNoEntrega) {
    return this.http.put<CausaNoEntrega>(`${this.url}/${element.id}`, element);
  }

  destroy(id: number) {
    return this.http.delete<number>(`${this.url}/${id}`);
  }
}
