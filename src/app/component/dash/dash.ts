import { Component, inject } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng-module';
import { VencimientosService } from '../../services/vencimiento/vencimientos-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth/auth-service';
import { VencimientoInterface } from '../../interfaces/vencimiento/vencimiento-interface';

@Component({
  selector: 'app-dash',
  imports: [PrimengModule],
  templateUrl: './dash.html',
  styleUrl: './dash.css'
})
export default class Dash {

  authService = inject(AuthService);
  vencimientosService = inject(VencimientosService);



  vencimientoResources = rxResource({
    stream: () => this.vencimientosService.getVencimientos(this.authService.user()!.userName),
  });
  getSeverity(vencimiento: VencimientoInterface): string {
    
    if (vencimiento.cantNotasIng==0) {
      return 'background-color: green; font-weight: 500;';
    } else {
      return 'background-color: red; font-weight: 500;';
    }
  }
}
