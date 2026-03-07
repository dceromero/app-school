import { Component, input, output } from '@angular/core';
import {  LogroNTInterface } from '../../../interfaces/logros/logro-interface';
import { PrimengModule } from '../../../primeng/primeng-module';                                                                                                                                                                                                                               
@Component({
  selector: 'app-grid-logros-cal',
  imports: [PrimengModule],
  templateUrl: './grid-logros-cal.html',
  styleUrl: './grid-logros-cal.css'
})
export class GridLogrosCal {

  inLogros = input.required<LogroNTInterface[]>();
  outLogro = output<LogroNTInterface>();
  outLogroObservaciones = output<LogroNTInterface>();

  getCantLogros(): number {
    if (this.inLogros() === null || this.inLogros() === undefined) {
      return 1;
    }

    return this.inLogros()?.at(0)?.cantLogros ?? 1;
  }

  dialogGetStudient(logro:LogroNTInterface) {
    this.outLogro.emit(logro);
  }

   dialogGetStudientObservaciones(logro:LogroNTInterface) {
    this.outLogroObservaciones.emit(logro);
  }
}
