import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import type { AuthInterface } from '../../interfaces/auth/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private http = inject(HttpClient);

  login( usuario:object) {
    return this.http.post<AuthInterface>(`${environment.apiUrl}/auth/login`, usuario)
  }
}
