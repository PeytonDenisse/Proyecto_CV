import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent)
  },
  {
    path: 'cv',
    loadComponent: () => import('./pages/cv/cv').then(m => m.CvComponent)
  },
  { path: '**', redirectTo: 'home' }
];
