import { Component, inject, input, OnInit, output } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FindLogroInterface, LogroInterface } from '../../../interfaces/logros/logro-interface';

@Component({
  selector: 'app-grid-logros',
  imports: [PrimengModule],
  templateUrl: './grid-logros.html',
  styleUrl: './grid-logros.css'
})
export class GridLogros {
  outDialog = output<string>();
  inLogros = input<LogroInterface[]>();
  inFindLogros = input.required<FindLogroInterface | null>();
 
  viewDialog(codLogro: string) {
    this.outDialog.emit(codLogro);
  }

}
