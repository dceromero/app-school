import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, input, output } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { DatePipe } from '@angular/common';
import { ContenidoInterface, FindContenidoInterface } from '../../../interfaces/logros/logro-interface';
import { ContenidoService } from '../../../services/contenidos/contenido-service';
import { AuthService } from '../../../services/auth/auth-service';

@Component({
  selector: 'app-contenidos',
  imports: [PrimengModule, ReactiveFormsModule, DatePipe],
  templateUrl: './contenidos.html',
  styleUrl: './contenidos.css'
})
export class Contenidos {
  private fb = inject(FormBuilder);
  authService = inject(AuthService);
  private service = inject(ContenidoService);

  inFindContenido = input<FindContenidoInterface | null>();
  outSaveContent = output<boolean>();
  tab: string = "0";

  formContent = this.fb.group({
    descLogro: [{ value: '', disabled: true }, Validators.required],
    item: [{ value: '', disabled: true }, Validators.required],
    comentario: [''],
    contenido: ['']
  })

  changeTab(tabIndex: string) {
    this.tab = tabIndex;
  }

  getContent(contenido: ContenidoInterface) {
    this.tab = "1";
    console.log(contenido);
    this.formContent.get('item')?.setValue(contenido.item ?? '');
    this.formContent.get('comentario')?.setValue(contenido.comentario ?? '');
    this.formContent.get('contenido')?.setValue(contenido.contenido ?? '');
  }

  closedDialog() {
    this.tab = "0";
    this.outSaveContent.emit(true);
  }

  saveContent() {
    let contenido: ContenidoInterface = {
      id: this.inFindContenido()?.id ?? 0,
      item: this.formContent.get('item')?.value ?? '',
      comentario: this.formContent.get('comentario')?.value ?? '',
      contenido: this.formContent.get('contenido')?.value ?? '',
      fecRegistro: null,
      usuario: this.authService.user()!.userName,
    };
    console.log('Contenido a guardar:', contenido);

    this.service.saveContenido(contenido).subscribe({
      next: (response) => {
        this.inFindContenido()!.contenidos = response;
        this.tab = "0";
      },
      error: (error) => {
        console.error('Error al guardar contenido:', error);
      }
    });
  }
}
