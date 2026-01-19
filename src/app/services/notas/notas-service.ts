import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { NotaSaveInterface } from '../../interfaces/notas/nota-interface';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private http = inject(HttpClient);

  updateNota(nota: NotaSaveInterface): Observable<any> {
    return this.http.post(`${environment.apiUrl}/notas/save`, nota);
  }
}
