import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../features/main/home/home').then(m => m.Home),
    data:{
        name:"Inicio",
        icon: 'bi bi-house'
    }
  },/*
  {
    path: 'consultas',
    loadComponent: () =>
      import('../features/main/consult/consult').then(m => m.Consult)
  },
  {
    path: 'registrar',
    loadComponent: () =>
      import('../features/main/register/register').then(m => m.Register)
  },*/
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
];