import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            /**
             * enviamos el path, el componente y un objeto
             * el objeto puede llevar multiple información
             */
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
            { path: 'zapatos', component: ZapatosComponent, data: { titulo: 'Zapatos'}  },
            { path: 'graficas', component: Graficas1Component, data: { titulo: 'Gráficas'}  },
            { path: 'accout-settings', component: AccoutSettingComponent, data: { titulo: 'Ajuste Tema'}  }
        ]
    },
];

// exportando este modulo, { useHash: true } permite el usu de #
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
