import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '@app-models/index';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.apiUrl + '/user';

  constructor(
    private http: HttpClient,
  ) { }

  index() {
    return this.http.get<User[]>(this.url);
  }

  show(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  create(element: User) {
    return this.http.post<User>(this.url, element);
  }

  update(element: User) {
    return this.http.put<User>(`${this.url}/${element.id}`, element);
  }

  destroy(id: number) {
    return this.http.delete<number>(`${this.url}/${id}`);
  }
}
