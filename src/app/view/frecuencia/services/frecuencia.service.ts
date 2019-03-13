import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrecuenciaService {

  private url = environment.apiUrl + '/frecuencia'

  constructor(
    private http: HttpClient,
  ) { }

  findByIdDescripcion(id: number) {
    return this.http.get<string>(`${this.url}/descripcion/${id}`);
  }
}
