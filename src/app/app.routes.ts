import { Routes } from '@angular/router';
import { NotAuthGuard } from './guards/not-auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/auth/auth').then(m => m.Auth)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./page/dashboard/dashboard'),
    canMatch: [NotAuthGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./component/dash/dash')
      },
      {
        path: 'logros',
        loadComponent: () => import('./page/logros/logros')
      },
      {
        path: 'notas',
        loadComponent: () => import('./page/notas/notas')
      },
      {
        path:'comentarios',
        loadComponent: () => import('./page/informes/comentario/comentario')
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  },
];
