import { Component, inject, input, OnInit, output } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FindLogroInterface, LogroInterface } from '../../../interfaces/logros/logro-interface';
import { LogroService } from '../../../services/logro/logro-service';

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
  private logroService = inject(LogroService);
 
  viewDialog(codLogro: string) {
    this.outDialog.emit(codLogro);
  }

  getCantLogros(): number {   
    if (this.inLogros()===null || this.inLogros()===undefined) {
      return 1;
    }
    return this.inLogros()?.at(0)?.cantLogros??1;
  }

  deleteLogro(codLogro: string) {
    if (!this.inFindLogros()) {
      console.error('No se proporcionaron los datos necesarios para eliminar el logro.');
      return;
    }
    this.logroService.deleteLogro(codLogro, this.inFindLogros()!).subscribe({
      next: (resp) => {
        console.log('Logro eliminado', resp);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
