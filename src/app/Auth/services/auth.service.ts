import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { delay } from 'rxjs/operators';
import { UserCredentials } from '../models/user-credential';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl + '/auth';

  constructor(
    private http: HttpClient,
  ) {
  }

  singIn(credentials: UserCredentials) {
    return this.http.post(`${this.url}/singIn`, credentials).pipe(
      delay(2000),
    );
  }

}
