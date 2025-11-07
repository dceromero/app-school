import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FindLogroInterface } from '../../../interfaces/logros/logro-interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogroService } from '../../../services/logro/logro-service';

@Component({
  selector: 'app-form-logros',
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './form-logros.html',
  styleUrl: './form-logros.css'
})
export class FormLogros {
  closeFormBoolean = output<string>();
  openForm = input.required<string>();
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
      codLogro: this.convertToNumber(this.formLogros.get('codLogro')?.value),
      cantNotas: this.convertToNumber(this.formLogros.get('cantNotas')?.value),
      nota1: this.convertToNumber(this.formLogros.get('nota1')?.value),
      nota2: this.convertToNumber(this.formLogros.get('nota2')?.value),
      nota3: this.convertToNumber(this.formLogros.get('nota3')?.value),
      nota4: this.convertToNumber(this.formLogros.get('nota4')?.value),
      descLogro: this.formLogros.get('descLogro')?.value
    }
    console.log(sendData);
    this.logroService.createLogro(sendData).subscribe({
      next: (resp) => {
        console.log('Logro creado', resp);
        this.resetForm();
        this.closeFormBoolean.emit('');
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  closeForm() {
    this.resetForm();
    this.closeFormBoolean.emit('');
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
  }
}
