import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng-module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  imports: [PrimengModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
 items: MenuItem[] | undefined;
  ngOnInit() {
        this.items = [
            {
                label: 'Parametros Basicos',
                icon: 'fa-solid fa-gear',
                items: [
                    {
                        label: 'Año Electivo',
                        icon: 'pi pi-plus',
                    },
                    {
                        label: 'Areas',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Asignaturas',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Aspectos a Mejorar y Fortalecer',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Datos Varios Ayuda',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Grados',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Grados y Grupos',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Indicadores de Finales' ,
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Maestro Estudiantes',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Maestro General de Logros',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Maestro Logros',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Matricula - Planilla',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Periodos y Fechas',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Planilla General Notas',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Planilla',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Terceros',
                        icon: 'pi pi-plus'
                    },
                    {
                        label: 'Valoraciones',
                        icon: 'pi pi-plus'
                    }
                ]
            },
            {
                label: 'Profile',
                icon: 'fa-jelly-duo fa-regular fa-circle-user',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '⌘+O'
                    },
                    {
                        label: 'Messages',
                        icon: 'pi pi-inbox',
                        badge: '2'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        shortcut: '⌘+Q'
                    }
                ]
            }
        ];
    }
}
