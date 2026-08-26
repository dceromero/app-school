import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EvaluacionInterface, TypeEvaluacionInterface } from '../../interfaces/logros/logro-interface';

@Injectable({
  providedIn: 'root',
})
export class EvaluacionService {
  private http = inject(HttpClient);

  getEvaluationByIdLogro(idLogro: number): Observable<EvaluacionInterface[]> {
    return this.http.get<EvaluacionInterface[]>(`${environment.apiUrl}/evaluacion/get-evalaciones-by-id-logro`, {
      params: { id: idLogro },
    });
  }

  getTypeEvaluation(): Observable<TypeEvaluacionInterface[]> {
    return this.http.get<TypeEvaluacionInterface[]>(`${environment.apiUrl}/evaluacion/tipos-evaluacion`);
  }

  postEvaluation(evaluacion: EvaluacionInterface): Observable<EvaluacionInterface[]> {
    return this.http.post<EvaluacionInterface[]>(`${environment.apiUrl}/evaluacion/save-evaluation`, evaluacion);
  }
}
