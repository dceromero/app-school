import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FindLogroCalInterface, FindLogroInterface, LogroInterface, LogroNTInterface, OtherNotesInterface } from '../../interfaces/logros/logro-interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NotaStudientInterface, ObservacionesInterface, RespSaveObsInterface, SaveObservadorInterface } from '../../interfaces/notas/nota-interface';

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

  getLogrosCal(findLogro: FindLogroCalInterface): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/logros/get-codigo-planilla`, findLogro);
  }

  getLogrosCalByCodPlanilla(codPlanilla: string, usuario: string): Observable<LogroNTInterface[]> {
    return this.http.get<LogroNTInterface[]>(`${environment.apiUrl}/logros/get-logros-by-cod-planilla`,
      {
        params: { codPlanilla, usuario }
      });
  }

  getOtherNotes(codPlanilla: string, usuario: string):Observable<OtherNotesInterface[]> {
    return this.http.get<OtherNotesInterface[]>(`${environment.apiUrl}/notas/other-notes`,
      {
        params: { codPlanilla, usuario }
      });
  }
  getStudientByLogro(codLogro: string, idPlanilla: number): Observable<NotaStudientInterface[]> {
    return this.http.get<NotaStudientInterface[]>(`${environment.apiUrl}/logros/get-studient-by-cod-logro`,
      {
        params: { codLogro, idPlanilla }
      });
  }

  createLogro(logro: any): Observable<LogroInterface[]> {
    return this.http.post<LogroInterface[]>(`${environment.apiUrl}/logros/save-logros`, logro);
  }

  updateLogro(logro: any): Observable<LogroInterface[]> {
    return this.http.put<LogroInterface[]>(`${environment.apiUrl}/logros/update-logros`, logro);
  }

  deleteLogro(codLogro: string, findLogro: FindLogroInterface): Observable<LogroInterface[]> {
    return this.http.delete<LogroInterface[]>(`${environment.apiUrl}/logros/delete-logros`,
      {
        params: { codLogro },
        body: findLogro
      });
  }
  /******************************************************************************************************/
  saveObservacion(observacion: SaveObservadorInterface): Observable<RespSaveObsInterface> {
    return this.http.post<RespSaveObsInterface>(`${environment.apiUrl}/logros/save-observador-nota`, observacion);
  }

  getObservacionesByEstudiantes(idMatricula: number, idPlanilla: number, codLogro: string): Observable<ObservacionesInterface[]> {
    return this.http.get<ObservacionesInterface[]>(`${environment.apiUrl}/logros/get-observador-nota`,
      {
        params: { idMatricula, idPlanilla, codLogro }
      });
  }

  deleteObservacion(idRegOb: number): Observable<ObservacionesInterface[]> {
    return this.http.delete<ObservacionesInterface[]>(`${environment.apiUrl}/logros/delete-observador-nota`,
      {
        params: { idRegOb }
      });
  }
}