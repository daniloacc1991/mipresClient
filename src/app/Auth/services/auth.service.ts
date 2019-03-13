import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserCredentials } from '../models/user-credential';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl + '/auth';

  constructor(
    private http: HttpClient,
  ) { }

  singIn(credentials: UserCredentials) {
    return this.http.post(`${this.url}/singIn`, credentials).pipe(
      delay(2000),
    );
  }
  // ...
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  }
}
