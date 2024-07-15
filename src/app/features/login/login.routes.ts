import { Routes } from "@angular/router";
import { LayoutComponent } from "../../core/components/layout/layout.component";

export const LoginRoutes: Routes = [
    {
        path: 'login',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
            }
        ]
    },
    {
        path: 'registrar',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
            }
        ]
    }
]