import { NgModule } from '@angular/core';
//modulo de las paginas comunes para la aplicacion
import { SheredModule } from '../shared/shered.module';
//para trabajar con las rutas hijas
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ZapatosComponent } from './zapatos/zapatos.component';


@NgModule({
  declarations: [
    PagesComponent,    
    DashboardComponent,
    ZapatosComponent
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ZapatosComponent
  ],
  imports:[
    SheredModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
