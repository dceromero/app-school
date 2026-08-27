import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContenidoInterface } from '../../interfaces/logros/logro-interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContenidoService {
  private http = inject(HttpClient);

  getContenidosByIdLogro(idLogro: number): Observable<ContenidoInterface[]> {
    return this.http.get<ContenidoInterface[]>(`${environment.apiUrl}/content/get-content-by-id`, {
      params: { id: idLogro },
    });
  }

  saveContenido(contenido: ContenidoInterface): Observable<ContenidoInterface[]> {
    return this.http.post<ContenidoInterface[]>(`${environment.apiUrl}/content/save-content`, contenido);
  }
}
