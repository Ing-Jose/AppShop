import { NgModule } from '@angular/core';
// para trabajar con routerlink en el menu
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // para que trabaje las directivas ngfor

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
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
