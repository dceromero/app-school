import { Component, inject } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng-module';
import { VencimientosService } from '../../services/vencimiento/vencimientos-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth/auth-service';
import { VencimientoInterface } from '../../interfaces/vencimiento/vencimiento-interface';
import { PeriodoService } from '../../services/periodos/periodo-service';

@Component({
  selector: 'app-dash',
  imports: [PrimengModule],
  templateUrl: './dash.html',
  styleUrl: './dash.css'
})
export default class Dash {

  authService = inject(AuthService);
  periodoService = inject(PeriodoService);
  vencimientosService = inject(VencimientosService);



  vencimientoResources = rxResource({
    stream: () => this.vencimientosService.getVencimientos(this.authService.user()!.userName),
  });
  getSeverity(vencimiento: VencimientoInterface): string {
    
    if (vencimiento.cantNotasIng==0) {
      return 'background-color: #88DC65; font-weight: 500;';
    } else {
      return 'background-color: #A63723; font-weight: 500; color: #e9dfdf;';
    }
  }

  getNamePeriodo(idPeriodo: number): string {
    return this.periodoService.getNamePeriodo(idPeriodo);
  }
}
