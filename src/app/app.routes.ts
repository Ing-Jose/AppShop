import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

// import { LoginGuardGuard } from './services/service.index';

/**
 * constante con el arreglo de ruta tiene las rutas,
 * qu son objetos se compenen de la url y el componete
 * que se desea cargar. Paginas principales tendra esta
 * constante
 */
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    
    { path: 'register', component: RegisterComponent },
    //bloquedo para que no se pueda acceder quien no este registrado
    // { path: 'register', component: RegisterComponent, canActivate: [LoginGuardGuard] },
    // {
    //     path: '',
    //     component: PagesComponent,
    //     canActivate: [LoginGuardGuard],
    //     loadChildren: './pages/pages.module#PagesModule'
    // },
    { path: '**', component: NopagefoundComponent }
];

//exportando este modulo, { useHash: true } permite el usu de #
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
