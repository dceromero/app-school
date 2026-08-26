import { from, Observable, of } from 'rxjs';
import { PeriodoInterface } from './../../interfaces/logros/periodo-interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeriodoService {

  private periodos: PeriodoInterface[] = [
    { idPeriodo: 1, periodo: 'Periodo - 1' },
    { idPeriodo: 2, periodo: 'Periodo - 2' },
    { idPeriodo: 3, periodo: 'Periodo - 3' },
    { idPeriodo: 4, periodo: 'Periodo - 4' }
  ];

  getAllPeriodos() {
    return of<PeriodoInterface[]>(this.periodos)
  }

  getPeriodoActual(idPeriodo: number): Observable<PeriodoInterface[] > {
    const periodoActual = this.periodos.find(periodo => periodo.idPeriodo === idPeriodo);
    return of<PeriodoInterface[] >(periodoActual ? [periodoActual] : []);
  }

  getNamePeriodo(idPeriodo: number): string {
    const periodo = this.periodos.find(periodo => periodo.idPeriodo === idPeriodo);
    return (periodo ? periodo.periodo : '');
  }  
}
