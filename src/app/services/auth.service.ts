import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Credential } from '../models/credential';
import { AuthenResponse } from '../models/authen-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;
  constructor(private http: HttpClient) { }

  authen(credential: Credential): Observable<AuthenResponse> {
    return this.http.post<AuthenResponse>(`${environment.api_url}/auth/login`, credential);
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isLogin(): boolean {
    return !!this.token;
  }

}
