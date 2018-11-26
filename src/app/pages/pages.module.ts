import { NgModule } from '@angular/core';
// modulo de las paginas comunes para la aplicacion
import { SheredModule } from '../shared/shered.module';
// para trabajar con las rutas hijas
import { PAGES_ROUTES } from './pages.routes';
// para que permita trabajar con ngModule en los formulario
import { FormsModule } from '@angular/forms';

// graficas ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
// temporal
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';


@NgModule({
  declarations: [
    PagesComponent,    
    DashboardComponent,
    ZapatosComponent,
    Graficas1Component,
    GraficoDonaComponent,
    AccoutSettingComponent
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ZapatosComponent
  ],
  imports:[
    SheredModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule { }
