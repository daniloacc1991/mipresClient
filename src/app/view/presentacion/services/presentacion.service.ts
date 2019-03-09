import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Presentacion } from '@app-models/index';

@Injectable({
  providedIn: 'root'
})
export class PresentacionService {

  private url = environment.apiUrl + '/presentacion';
  constructor(
    private http: HttpClient,
  ) { }

  findAll() {
    return this.http.get<Presentacion[]>(this.url);
  }

  show(id: number) {
    return this.http.get<Presentacion>(`${this.url}/${id}`);
  }

  create(element: Presentacion) {
    return this.http.post<Presentacion>(this.url, element);
  }

  update(element: Presentacion) {
    return this.http.put<Presentacion>(`${this.url}/${element.id}`, element);
  }

  destroy(id: number) {
    return this.http.delete<Presentacion>(`${this.url}/${id}`);
  }
}
