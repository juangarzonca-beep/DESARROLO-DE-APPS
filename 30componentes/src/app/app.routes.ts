import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'formularios',
    loadComponent: () => import('./pages/formularios/formularios.page').then( m => m.FormulariosPage)
  },
  {
    path: 'listas',
    loadComponent: () => import('./pages/listas/listas.page').then( m => m.ListasPage)
  },
  {
    path: 'overlays',
    loadComponent: () => import('./pages/overlays/overlays.page').then( m => m.OverlaysPage)
  },
  {
    path: 'multimedia',
    loadComponent: () => import('./pages/multimedia/multimedia.page').then( m => m.MultimediaPage)
  },
];
