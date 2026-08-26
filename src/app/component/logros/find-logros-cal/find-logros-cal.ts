import { Component, inject, output } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng-module';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FindLogroCalInterface, FindLogroInterface, LogroInterface, LogroNTInterface, OtherNotesInterface } from '../../../interfaces/logros/logro-interface';
import { AuthService } from '../../../services/auth/auth-service';
import { VencimientosService } from '../../../services/vencimiento/vencimientos-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { LogroService } from '../../../services/logro/logro-service';
import { AsignaturaInterface, periodoInterface } from '../../../interfaces/logros/periodo-interface';
import { from, of } from 'rxjs';
import { PeriodoService } from '../../../services/periodos/periodo-service';

@Component({
  selector: 'app-find-logros-cal',
  imports: [PrimengModule, ReactiveFormsModule],
  templateUrl: './find-logros-cal.html',
  styleUrl: './find-logros-cal.css'
})
export class FindLogrosCal {
  private findLogro: FindLogroCalInterface | undefined = undefined;

  authService = inject(AuthService);
  vencimientosService = inject(VencimientosService);
  logroService = inject(LogroService);
  periodoService = inject(PeriodoService);
  private fb = inject(FormBuilder);


  listAsignaturas: AsignaturaInterface[] = [];
  listLogros = output<LogroNTInterface[]>();
  outFindLogros = output<FindLogroInterface>();
  outListOtherNotes = output<OtherNotesInterface[]>();

  formFindLogros = this.fb.group({
    grado: ['', Validators.required],
    grupo: ['', Validators.required],
    asignatura: ['', Validators.required],
    periodo: ['', Validators.required],
  });

  gradosResources = rxResource({
    stream: () => this.vencimientosService.getGrados(this.authService.user()!.userName),
  });

  groupsResources = rxResource({
    stream: () => this.vencimientosService.getGrups(),
  });

  periodosResources = rxResource({
    stream: () => this.periodoService.getPeriodoActual(parseInt(this.authService.user()!.periodo))
  });

  intPeriodo = parseInt(this.authService.user()!.periodo);

  selectedGrado(grado: string) {
    this.formFindLogros.controls['asignatura'].setValue('');
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
      grupo: this.formFindLogros.value.grupo || '',
      periodo: this.formFindLogros.value.periodo || ''
    };
    this.logroService.getLogrosCal(this.findLogro).subscribe({
      next: (logros) => {
        if (logros.includes("Falta")) {
          this.listLogros.emit([
            {
              "idPlanilla": -1,
              "codLogro": "0",
              "textoLg": logros,
              "cantNotas": 0,
              "pc1": 0.00,
              "pc2": 0.00,
              "pc3": 0.00,
              "pc4": 0.00,
              "cantLogros": 0
            }
          ]);
        } else {
          this.logroService.getLogrosCalByCodPlanilla(logros, this.authService.user()!.userName).subscribe({
            next: (logrosCal) => {
              this.listLogros.emit(logrosCal);
            }
          });
        }
      }
    });
  }

  findOtherNotes() {
    if (this.formFindLogros.invalid) {
      this.formFindLogros.markAllAsTouched();
      return;
    }
    this.findLogro = {
      codAsignatura: this.formFindLogros.value.asignatura || '',
      codGrado: this.formFindLogros.value.grado || '',
      grupo: this.formFindLogros.value.grupo || '',
      periodo: this.formFindLogros.value.periodo || ''
    };
    this.logroService.getLogrosCal(this.findLogro).subscribe({
      next: (codPlanilla) => {
        if (codPlanilla.includes("Falta")) {
          console.log("No hay planilla");
        } else {
          this.logroService.getOtherNotes(codPlanilla, this.authService.user()!.userName).subscribe({
            next: (otherNotes) => {
              this.outListOtherNotes.emit(otherNotes);
            }
          })
        }
      }
    });
  }
}
