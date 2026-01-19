import { Component } from '@angular/core';
import { GridLogros } from '../../component/logros/grid-logros/grid-logros';
import { FindLogros } from '../../component/logros/find-logros/find-logros';
import { FindLogroInterface, LogroInterface } from '../../interfaces/logros/logro-interface';
import { FormLogros } from '../../component/logros/form-logros/form-logros';
import { Evaluaciones } from '../../component/logros/evaluaciones/evaluaciones';

@Component({
  selector: 'app-logros',
  imports: [FindLogros, GridLogros, FormLogros, Evaluaciones],
  templateUrl: './logros.html',
  styleUrl: './logros.css'
})
export default class Logros {

  logros: LogroInterface[] = []
  findLogros: FindLogroInterface | null = null;
  viewFormLogros: LogroInterface | null = null;
  viewEvaluaciones: LogroInterface | null = null;
  
  getLogros(event: LogroInterface[]) {
    this.logros = event;
  }

  openFormLogros(event: LogroInterface | null = null) {
    this.viewFormLogros = event;
  }

  openFormEvaluaciones(event: LogroInterface | null = null) {
    this.viewEvaluaciones = event;
  }

  sendFindLogros(event: FindLogroInterface) {
    this.findLogros = event;
  }
}
