import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'zapatos', component: ZapatosComponent },
            { path: 'graficas', component: Graficas1Component }
        ]
    },
];

//exportando este modulo, { useHash: true } permite el usu de #
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
