import { Routes } from '@angular/router';
import Logros from './page/logros/logros';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./page/auth/auth').then(m => m.Auth)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./page/dashboard/dashboard'),
    children: [
      {
        path: 'logros',
        loadComponent: () => import('./page/logros/logros')
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  },
];
