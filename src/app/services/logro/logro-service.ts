import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FindLogroInterface, LogroInterface } from '../../interfaces/logros/logro-interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogroService {
  private http = inject(HttpClient);

  getLogros(findLogro: FindLogroInterface): Observable<LogroInterface[]> {
    return this.http.post<LogroInterface[]>(`${environment.apiUrl}/logros/logros-by-user-grado-asig-per`,
      findLogro
    );
  }

  createLogro(logro: any): Observable<LogroInterface> {
    return this.http.post<LogroInterface>(`${environment.apiUrl}/logros/save-logros`, logro);
  }

  updateLogro(logro: any): Observable<LogroInterface> {
    return this.http.put<LogroInterface>(`${environment.apiUrl}/logros/update-logros`, logro);
  }

  deleteLogro(codLogro: string, findLogro: FindLogroInterface): Observable<LogroInterface> {
    return this.http.delete<LogroInterface>(`${environment.apiUrl}/logros/delete-logros`,
      {
        params: { codLogro },
        body: findLogro
      });
  }
}
