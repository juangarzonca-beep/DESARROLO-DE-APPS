import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'formularios',
        loadComponent: () =>
          import('../pages/formularios/formularios.page').then((m) => m.FormulariosPage),
      },
      {
        path: 'listas',
        loadComponent: () =>
          import('../pages/listas/listas.page').then((m) => m.ListasPage),
      },
      {
        path: 'overlays',
        loadComponent: () =>
          import('../pages/overlays/overlays.page').then((m) => m.OverlaysPage),
      },
      {
        path: 'multimedia',
        loadComponent: () =>
          import('../pages/multimedia/multimedia.page').then((m) => m.MultimediaPage),
      },
      {
        path: '',
        redirectTo: '/tabs/formularios',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/formularios',
    pathMatch: 'full',
  },
];
