import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CIE10 } from '@app-models/index';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Cie10Service {

  private url = environment.apiUrl + '/cie10';
  constructor(
    private http: HttpClient,
  ) { }

  findAll() {
    return this.http.get<CIE10[]>(this.url);
  }

  show(id: number) {
    return this.http.get<CIE10>(`${this.url}/${id}`);
  }

  create(element: CIE10) {
    return this.http.post<CIE10>(this.url, element);
  }

  update(element: CIE10) {
    return this.http.put<CIE10>(`${this.url}/${element.id}`, element);
  }

  destroy(id: number) {
    return this.http.delete<CIE10>(`${this.url}/${id}`);
  }
}
