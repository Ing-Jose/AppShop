import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    NopagefoundComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ],
  exports: [
    NopagefoundComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ]
})
export class SheredModule { }
