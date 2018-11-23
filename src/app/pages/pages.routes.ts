import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZapatosComponent } from './zapatos/zapatos.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'zapatos', component: ZapatosComponent },
        ]
    },
];

//exportando este modulo, { useHash: true } permite el usu de #
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
