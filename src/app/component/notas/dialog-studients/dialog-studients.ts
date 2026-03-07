import { Component, inject, input, OnInit, output } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { LogroNTInterface } from '../../../interfaces/logros/logro-interface';
import { NotaStudientInterface } from '../../../interfaces/notas/nota-interface';
import { FormsModule } from '@angular/forms';
import { NotasService } from '../../../services/notas/notas-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-studients',
  imports: [PrimengModule, FormsModule, CommonModule],
  templateUrl: './dialog-studients.html',
  styleUrl: './dialog-studients.css'
})
export class DialogStudients {
  inLogro = input.required<LogroNTInterface | null>();
  inGetStudients = input.required<NotaStudientInterface[]>();
  closeFormBoolean = output<LogroNTInterface | null>();
  notaService = inject(NotasService);

  closeDialog() {
    this.closeFormBoolean.emit(null);
  }

  saveAll() {
    this.notaService.updateNota(this.inGetStudients()).subscribe( {
      next: (data) => {
        console.log('Nota actualizada con éxito:', data);
      },
      error: (error) => {
        console.error('Error al actualizar la nota:', error);
      }
    });
  }
}
