import { Component, inject, input, output } from '@angular/core';
import { LogroInterface } from '../../../interfaces/logros/logro-interface';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-evaluaciones',
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './evaluaciones.html',
  styleUrl: './evaluaciones.css'
})
export class Evaluaciones {
  inEvaluaciones = input.required<LogroInterface | null>();

  private fb = inject(FormBuilder);

  formEvaluaciones = this.fb.group({
    descLogro: [{ value: '', disabled: true }, Validators.required],
    cantNotas: [{ value: '', disabled: true }, Validators.required],
  })
}
