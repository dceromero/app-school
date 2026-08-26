import { EvaluacionInterface } from './../../../interfaces/logros/logro-interface';
import { Component, inject, input, output } from '@angular/core';
import { FindEvaluacionInterface, LogroInterface } from '../../../interfaces/logros/logro-interface';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvaluacionService } from '../../../services/evaluacion/evaluacion-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-evaluaciones',
  imports: [PrimengModule, ReactiveFormsModule, DatePipe],
  templateUrl: './evaluaciones.html',
  styleUrl: './evaluaciones.css'
})
export class Evaluaciones {

  private fb = inject(FormBuilder);
  private evaluacionService = inject(EvaluacionService);
  inFindEvaluacion = input<FindEvaluacionInterface | null>();
  outGetEvaluation = output<EvaluacionInterface>();
  outCloseEvaluacion = output<boolean>();
  tab: string = "0";
  notaSelected:string = "";
  formEvaluaciones = this.fb.group({
    descLogro: [{ value: '', disabled: true }, Validators.required],
    item: [{ value: '', disabled: true }, Validators.required],
    evaluacion: [''],
    detalle: [''],
    fecha: ['']
  })

  changeTab(tabIndex: string) {
    this.tab = tabIndex;
  }

  helperTypeEvaluation = rxResource({
    stream: () => this.evaluacionService.getTypeEvaluation(),
  });

  getEvaluation(nota: EvaluacionInterface) {
    this.tab = "1";
    this.formEvaluaciones.get('descLogro')?.setValue(this.inFindEvaluacion()?.descLogro ?? '');
    this.formEvaluaciones.get('item')?.setValue(nota.item ?? '');
    this.notaSelected = nota.idEvaluacion ?? '';
    this.formEvaluaciones.get('evaluacion')?.setValue(nota.evaluacion ?? '');
    this.formEvaluaciones.get('detalle')?.setValue(nota.detalle ?? '');
    console.log(nota.fecha!.toString().split('T')[0]);
    this.formEvaluaciones.get('fecha')?.setValue(nota.fecha!.toString().split('T')[0] ?? '');
  }

  closedDialog() {
    this.tab = "0";
    this.outCloseEvaluacion.emit(true);
  }

  saveEvaluation() {
    let fecha = this.formEvaluaciones.get('fecha')!.value;

   let nota: EvaluacionInterface = {
      id: this.inFindEvaluacion()!.id,
      item: this.formEvaluaciones.get('item')?.value ?? '',
      idEvaluacion: null,
      evaluacion: this.formEvaluaciones.value.evaluacion ?? '',
      detalle: this.formEvaluaciones.get('detalle')?.value ?? '',
      fecha: new Date(fecha!) ?? null
    };
    this.evaluacionService.postEvaluation(nota).subscribe((savedEvaluation) => {
      this.inFindEvaluacion()!.evaluations = savedEvaluation || [];
    });
  }

}
