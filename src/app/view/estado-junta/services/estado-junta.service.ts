import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EstadoJunta } from '@app-models/index';

@Injectable({
  providedIn: 'root'
})
export class EstadoJuntaService {

  private url = environment.apiUrl + '/estado-junta-profesional';

  constructor(
    private http: HttpClient,
  ) { }

  index() {
    return this.http.get<EstadoJunta[]>(this.url);
  }

  show(id: number) {
    return this.http.get<EstadoJunta>(`${this.url}/${id}`);
  }

  create(element: EstadoJunta) {
    return this.http.post<EstadoJunta>(this.url, element);
  }

  update(element: EstadoJunta) {
    return this.http.put<EstadoJunta>(`${this.url}/${element.id}`, element);
  }

  destroy(id: number) {
    return this.http.delete<number>(`${this.url}/${id}`);
  }
}
