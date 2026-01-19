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
  outDialog = output<LogroInterface | null>();
  outDeleteLogro = output<LogroInterface[]>();  
  outDialogEvaluaciones = output<LogroInterface | null>();
  inLogros = input.required<LogroInterface[]>();
  inFindLogros = input.required<FindLogroInterface | null>();
  private logroService = inject(LogroService);
 
  viewDialog(logro: LogroInterface | null = null) {
    if (logro === null) {
      logro = this.logroDefault();
    }
    this.outDialog.emit(logro);
  }

  viewDialogEvaluaciones(logro: LogroInterface) {
    this.outDialogEvaluaciones.emit(logro);
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
      next: (resp: LogroInterface[]) => {
        this.outDeleteLogro.emit(resp);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private logroDefault(): LogroInterface {
    return {
      codLogro: '0',
      textoLg: '',
      cantNotas: 1,
      pc1: 0,
      pc2: 0, 
      pc3: 0,
      pc4: 0,
      cantLogros: 1
    };
  }
}
