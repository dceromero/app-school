import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OtherNotesInterface } from '../../../interfaces/logros/logro-interface';
import { PrimengModule } from '../../../primeng/primeng-module';
import { NotasService } from '../../../services/notas/notas-service';

@Component({
  selector: 'app-dialog-other-notas',
  imports: [PrimengModule, CommonModule, FormsModule],
  templateUrl: './dialog-other-notas.html',
  styleUrl: './dialog-other-notas.css'
})
export class DialogOtherNotas  {

  serviceNotas:NotasService = inject(NotasService);
  inOtherNotes = input.required<OtherNotesInterface[]>();
  closeFormBoolean = output<OtherNotesInterface | null>();


  
  save(otherNote: OtherNotesInterface) {
    console.log(otherNote);
  }

  closeDialog() {
    this.closeFormBoolean.emit(null);
  }

  saveAll() {
    var otherNotes = this.inOtherNotes();
    this.serviceNotas.updateOtherNota(otherNotes).subscribe({
      next: (data) => {
        console.log('Notas other actualizadas con éxito:', data);
      },
      error: (error) => {
        console.error('Error al actualizar las notas other:', error);
      }
    });
  }

}
