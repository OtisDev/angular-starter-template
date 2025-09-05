import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { mainRoutes } from './routes/main.routes';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { authRoutes } from './routes/auth.routes';

export const routes: Routes = [
    {
    path: '',
    component: MainLayout,
    children: [
      ...mainRoutes,
    ]
  },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      ...authRoutes
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
