import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MenuInterface } from '../../interfaces/menu/menu-interface';
import { environment } from '../../../environments/environment.development';
import { map, Observable, tap } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { MenuMapper } from '../../mapper/menu-mapper/menu-mapper';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

   private http = inject(HttpClient);

  getMenuOptions(grupoUsr: string):Observable<MenuItem[]> {
    return this.http.get<MenuInterface[]>(`${environment.apiUrl}/menu/menu-by-group`,{
      params: {
         grupoUsr
      }
    })
    .pipe(
      map(menuData => MenuMapper.mapToMenuItems(menuData))
    );
  }
}
