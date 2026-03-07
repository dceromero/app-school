import { Component, inject, input, output } from '@angular/core';
import { LogroNTInterface } from '../../../interfaces/logros/logro-interface';
import { NotaStudientInterface, ObsStudientInterface } from '../../../interfaces/notas/nota-interface';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogFormObsStudient } from '../dialog-form-obs-studient/dialog-form-obs-studient';
import { LogroService } from '../../../services/logro/logro-service';

@Component({
  selector: 'app-dialog-obs-studiants',
  imports: [PrimengModule, CommonModule, DialogFormObsStudient],
  templateUrl: './dialog-obs-studiants.html',
  styleUrl: './dialog-obs-studiants.css'
})
export class DialogObsStudiants {
  inLogro = input.required<LogroNTInterface | null>();
  inGetStudients = input.required<NotaStudientInterface[]>();
  closeFormObs = output<LogroNTInterface | null>();
  dialogVisible:boolean = false;
  
  private serviceObservaciones: LogroService = inject(LogroService)
  inputStudient :ObsStudientInterface | null = null;
  closeDialog() {
    this.closeFormObs.emit(null);
  }

  dialogObsStudient(){
    this.dialogVisible = true;
  }

  obsForm({idmatricula, idPlanilla, CodLogro, nombres, apellidos, numSemana}: NotaStudientInterface) {
    const estudiante = `${apellidos} ${nombres}`;
    this.serviceObservaciones.getObservacionesByEstudiantes(idmatricula, idPlanilla, CodLogro).subscribe({
      next: (resp) => {
        this.inputStudient = {idmatricula, idPlanilla, CodLogro, estudiante, numSemana, observaciones: resp};
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
