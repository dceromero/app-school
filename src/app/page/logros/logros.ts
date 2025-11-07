import { Component, signal } from '@angular/core';
import { GridLogros } from '../../component/logros/grid-logros/grid-logros';
import { FindLogros } from '../../component/logros/find-logros/find-logros';
import { FindLogroInterface, LogroInterface } from '../../interfaces/logros/logro-interface';
import { FormLogros } from '../../component/logros/form-logros/form-logros';

@Component({
  selector: 'app-logros',
  imports: [FindLogros, GridLogros, FormLogros],
  templateUrl: './logros.html',
  styleUrl: './logros.css'
})
export default class Logros {

  logros: LogroInterface[] = []
  findLogros: FindLogroInterface | null = null;
  viewFormLogros: string = '';
  
  getLogros(event: LogroInterface[]) {
    this.logros = event;
  }

  openFormLogros(event: string) {
    this.viewFormLogros = event;
  }

  sendFindLogros(event: FindLogroInterface) {
    this.findLogros = event;
  }
}
