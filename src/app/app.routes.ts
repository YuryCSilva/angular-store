import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

export const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },
    {
    path: 'login',
    component: LayoutComponent,
    children: [
        {
            path: '',
            loadComponent: () => import('./features/login/pages/login.component').then(m => m.LoginComponent)
        }
    ]},
    
];
