import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import type { AuthInterface, Usuario } from '../../interfaces/auth/auth-interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  checkStatusResource = rxResource({
    stream: () => this.checkAuthStatus(),
  });


  private _authStatus = signal<AuthStatus>('checking');
  private _authUser = signal<Usuario | null>(null);
  private _token = signal<string | null>(localStorage.getItem('token'));

  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() === 'authenticated') {
      return 'authenticated';
    }
    if (this._authStatus() === 'not-authenticated') {
      return 'not-authenticated';
    }
    return 'checking';
  });

  user = computed(() => this._authUser());
  token = computed(this._token);

  login(usuario: object): Observable<boolean> {
    return this.http.post<AuthInterface>(`${environment.apiUrl}/auth/login`, usuario)
      .pipe(
        map(res => this.handleAuthSuccess(res)),
        catchError(err => this.logout())
      )
  }

  logout() {
    this._authStatus.set('not-authenticated');
    this._authUser.set(null);
    this._token.set(null);
    localStorage.clear();
    return of(false);
  }

  checkAuthStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}') as Usuario;
    if (!token) {
      this.logout();
    }
    return this.http.get<boolean>(`${environment.apiUrl}/token/check-status`)
      .pipe(
        tap(() => {
          this._authStatus.set('authenticated')
          this._authUser.set(usuario);
        }),
        map(() => true),
        catchError((err) => this.logout())
      );

  }

  private handleAuthSuccess(res: AuthInterface) {
    this._authUser.set(res.usuario);
    this._token.set(res.token);
    this._authStatus.set('authenticated');
    localStorage.setItem('token', res.token);
    localStorage.setItem('usuario', JSON.stringify(res.usuario));
    return true;
  }


}
