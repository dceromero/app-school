import { Component, inject } from '@angular/core';
import { FindLogrosCal } from '../../component/logros/find-logros-cal/find-logros-cal';
import { GridLogrosCal } from '../../component/logros/grid-logros-cal/grid-logros-cal';
import { DialogStudients } from '../../component/notas/dialog-studients/dialog-studients';
import { FindLogroInterface, LogroInterface, LogroNTInterface } from '../../interfaces/logros/logro-interface';
import { LogroService } from '../../services/logro/logro-service';
import { NotaStudientInterface } from '../../interfaces/notas/nota-interface';
@Component({
  selector: 'app-notas',
  imports: [FindLogrosCal, GridLogrosCal, DialogStudients],
  templateUrl: './notas.html',
  styleUrl: './notas.css'
})
export default class Notas {


  logroService = inject(LogroService);
  findLogros: FindLogroInterface | null = null;
  logros: LogroNTInterface[] = []
  logrosCal: LogroNTInterface | null = null;
  studients: NotaStudientInterface[] = []

  sendFindLogros(event: FindLogroInterface) {
    this.findLogros = event;
  }

  getLogros(event: LogroNTInterface[]) {
    this.logros = event;
  }

  getStudient(logro: LogroNTInterface | null = null) {
    this.logrosCal = logro;
    if (logro) {
      this.logroService.getStudientByLogro(logro.codLogro, logro.idPlanilla).subscribe({
        next: (data) => {
          this.studients = data;
        },
        error: (error) => {
          console.error('Error al obtener estudiantes:', error);
        }
      });
    }
  }
}
