import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then(module => module.ClientesModule),
  },
  {
    path: 'planos',
    loadChildren: () => import('./pages/planos/planos.module').then(module => module.PlanosModule),
  }
]
