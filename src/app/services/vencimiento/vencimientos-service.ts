import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { VencimientoInterface } from '../../interfaces/vencimiento/vencimiento-interface';
import { Observable } from 'rxjs';
import { AsignaturaInterface, GradoInterface, groupsInterface } from '../../interfaces/logros/periodo-interface';

@Injectable({
  providedIn: 'root'
})
export class VencimientosService {
  
  private http = inject(HttpClient);


  getVencimientos(user: string):Observable<VencimientoInterface[]> { 
    return this.http.get<VencimientoInterface[]>(`${environment.apiUrl}/vencimientos/vencimientos-by-user`,{
      params: {
         user
      }
    });
  }

  getGrados(user: string):Observable<GradoInterface[]> { 
    return this.http.get<GradoInterface[]>(`${environment.apiUrl}/vencimientos/grados-by-user`,{
      params: {
         user
      }
    });
  }

  getAsignaturas(user: string, grado: string):Observable<AsignaturaInterface[]> { 
    return this.http.get<AsignaturaInterface[]>(`${environment.apiUrl}/vencimientos/asignatura-by-user-and-grado`,{
      params: {
         user,
         grado
      }
    });
  }

  getGrups():Observable<groupsInterface[]> {
    return this.http.get<groupsInterface[]>(`${environment.apiUrl}/vencimientos/get-groups`);
  }
}
