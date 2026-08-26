import { Component, inject, output } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { AuthService } from '../../../services/auth/auth-service';
import { VencimientosService } from '../../../services/vencimiento/vencimientos-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { AsignaturaInterface } from '../../../interfaces/logros/periodo-interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogroService } from '../../../services/logro/logro-service';
import { FindLogroInterface, LogroInterface } from '../../../interfaces/logros/logro-interface';
import { PeriodoService } from '../../../services/periodos/periodo-service';

@Component({
  selector: 'app-find-logros',
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './find-logros.html',
  styleUrl: './find-logros.css'
})
export class FindLogros {

  authService = inject(AuthService);
  vencimientosService = inject(VencimientosService);
  logroService = inject(LogroService);
  periodoService = inject(PeriodoService);
  private findLogro: FindLogroInterface | undefined = undefined;
  private fb = inject(FormBuilder);

  formFindLogros = this.fb.group({
    grado: ['', Validators.required],
    asignatura: ['', Validators.required],
    periodo: ['', Validators.required],
  });

  listAsignaturas: AsignaturaInterface[] = [];

  listLogros = output<LogroInterface[]>();
  outFindLogros = output<FindLogroInterface>();

  gradosResources = rxResource({
    stream: () => this.vencimientosService.getGrados(this.authService.user()!.userName),
  });


  periodosResources = rxResource({
    stream: () => this.periodoService.getAllPeriodos()
  });


  selectedGrado(grado: string) {
    this.formFindLogros.controls['asignatura'].setValue('');
    this.formFindLogros.controls['periodo'].setValue('');
    this.listLogros.emit([]);
    this.outFindLogros.emit({
      codAsignatura: '', codGrado: '', periodo: '', usuario: ''
    });
    this.vencimientosService.getAsignaturas(
      this.authService.user()!.userName,
      grado || ''
    ).subscribe({
      next: (asignaturas) => {
        this.listAsignaturas = asignaturas;
      }
    });
  }

  findLogros() {
    if (this.formFindLogros.invalid) {
      this.formFindLogros.markAllAsTouched();
      return;
    }
    this.findLogro = {
      codAsignatura: this.formFindLogros.value.asignatura || '',
      codGrado: this.formFindLogros.value.grado || '',
      periodo: this.formFindLogros.value.periodo || '',
      usuario: this.authService.user()!.userName
    };
    this.logroService.getLogros(this.findLogro).subscribe({
      next: (logros) => {
        this.listLogros.emit(logros);
        this.outFindLogros.emit(this.findLogro!);
      }
    });
  }
}
