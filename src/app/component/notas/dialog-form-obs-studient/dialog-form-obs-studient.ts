import { Component, inject, input } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ObsStudientInterface, SaveObservadorInterface } from '../../../interfaces/notas/nota-interface';
import { LogroService } from '../../../services/logro/logro-service';

@Component({
  selector: 'app-dialog-form-obs-studient',
  imports: [PrimengModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dialog-form-obs-studient.html',
  styleUrl: './dialog-form-obs-studient.css'
})
export class DialogFormObsStudient {

  inputStudient = input.required<ObsStudientInterface>();
  private serviceObservaciones: LogroService = inject(LogroService)
  private fb = inject(FormBuilder);

  formObsStudient = this.fb.group({
    tipoObs: ['', [Validators.required]],
    estado: ['',  [Validators.required]],
    obs: ['', [Validators.required]],
    comentario: [''],
    cumplido: [false],
    numSemana: [0,  [Validators.required]],
  })

  listTipoNota = [
    { codTipoNota: 'Observador', tipoNota: 'Observador' },
    { codTipoNota: 'Seguimiento', tipoNota: 'Seguimiento' },
  ];

  listEstado = [
    { codEstado: 'Abierto', estado: 'Abierto' },
    { codEstado: 'Pendiente', estado: 'Pendiente' },
    { codEstado: 'Cerrado', estado: 'Cerrado' },
  ];



  listObservaciones() {
    const { idmatricula, idPlanilla, CodLogro }: ObsStudientInterface = this.inputStudient()
    this.serviceObservaciones.getObservacionesByEstudiantes(idmatricula, idPlanilla, CodLogro).subscribe({
      next: (resp) => {
        this.inputStudient().observaciones = resp;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteObs(idRegOb: number) {
    this.serviceObservaciones.deleteObservacion(idRegOb).subscribe({
      next: (resp) => {
        this.listObservaciones()
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  saveObservador() {
    if (this.formObsStudient.invalid) {
      this.formObsStudient.markAllAsTouched();
      return;
    }
    const { idmatricula, idPlanilla, CodLogro }: ObsStudientInterface = this.inputStudient();
    let sendData:SaveObservadorInterface = {
      tipoObs: this.formObsStudient.get('tipoObs')!.value as string,
      estado: this.formObsStudient.get('estado')!.value as string,
      obs: this.formObsStudient.get('obs')!.value as string,
      comentario: this.formObsStudient.get('comentario')!.value as string,
      cumplido: this.formObsStudient.get('cumplido')!.value?1:0,
      numSemana: this.formObsStudient.get('numSemana')!.value || 0,
      usuario: localStorage.getItem('user')!,
      idmatricula,
      idPlanilla,    
      CodLogro,
      
    };
    this.serviceObservaciones.saveObservacion(sendData).subscribe({
      next: (resp) => {
        this.listObservaciones();
        this.formObsStudient.reset();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
