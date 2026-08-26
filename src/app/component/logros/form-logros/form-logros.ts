import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FindLogroInterface, LogroInterface } from '../../../interfaces/logros/logro-interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogroService } from '../../../services/logro/logro-service';

@Component({
  selector: 'app-form-logros',
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './form-logros.html',
  styleUrl: './form-logros.css'
})
export class FormLogros {
  closeFormBoolean = output<LogroInterface | null>();
  outSaveLogros = output<LogroInterface[]>();
  openForm = input.required<LogroInterface | null>();
  dataFindLogros = input.required<FindLogroInterface | null>();

  private fb = inject(FormBuilder)
  private logroService = inject(LogroService)

  formLogros = this.fb.group({
    codLogro: [{ value: '0', disabled: true }, Validators.required],
    cantNotas: ['1', [Validators.required, Validators.min(1), Validators.max(4)]],
    nota1: ['0', [Validators.required, Validators.min(0), Validators.max(100)]],
    nota2: ['0', [Validators.required, Validators.min(0), Validators.max(100)]],
    nota3: ['0', [Validators.required, Validators.min(0), Validators.max(100)]],
    nota4: ['0', [Validators.required, Validators.min(0), Validators.max(100)]],
    descLogro: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
  })

  saveLogro() {

    if (this.formLogros.invalid) {
      this.formLogros.markAllAsTouched();
      return;
    }
    let sendData = {
      ...this.dataFindLogros(),
      codLogro: this.formLogros.get('codLogro')?.value,
      cantNotas: this.convertToNumber(this.formLogros.get('cantNotas')?.value),
      pc1: this.convertToNumber(this.formLogros.get('nota1')?.value),
      pc2: this.convertToNumber(this.formLogros.get('nota2')?.value),
      pc3: this.convertToNumber(this.formLogros.get('nota3')?.value),
      pc4: this.convertToNumber(this.formLogros.get('nota4')?.value),
      descLogro: this.formLogros.get('descLogro')?.value
    };
    if (sendData.codLogro && sendData.codLogro !== '0') {
      this.logroService.updateLogro(sendData).subscribe({
        next: (resp: LogroInterface[]) => {
          this.outSaveLogros.emit(resp);
          this.resetForm();
        },
        error: (err) => {
          console.log(err);
        }
      });
    } else {
      this.logroService.createLogro(sendData).subscribe({
        next: (resp) => {
          this.outSaveLogros.emit(resp);
          this.resetForm();
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  closeForm() {
    this.resetForm();
  }

  convertToNumber(value: string | null | undefined): number {
    if (!value) {
      return 0;
    }
    return parseInt(value);
  }

  private resetForm() {
    this.formLogros.reset({
      codLogro: '0',
      cantNotas: '1',
      nota1: '0',
      nota2: '0',
      nota3: '0',
      nota4: '0',
      descLogro: ''
    });
    this.closeFormBoolean.emit(null);
  }

  validateTotalPercentage(): boolean {
    const nota1 = this.convertToNumber(this.formLogros.get('nota1')?.value);
    const nota2 = this.convertToNumber(this.formLogros.get('nota2')?.value);
    const nota3 = this.convertToNumber(this.formLogros.get('nota3')?.value);
    const nota4 = this.convertToNumber(this.formLogros.get('nota4')?.value);
    return (nota1 + nota2 + nota3 + nota4) === 100;
  }
}
