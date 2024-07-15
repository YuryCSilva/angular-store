import { Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { LoginRoutes } from './features/login/login.routes';

export const routes: Routes = [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },
    ...LoginRoutes,
    
];
