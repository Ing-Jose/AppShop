import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  /**
   * servicio para proveer el menu 
   */
  // se simulara un menu
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Zapatos', url: '/zapatos' },
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'Gráficas', url: '/graficas' },
        // { titulo : 'ProgressBar', url: '/progress' },
        // { titulo: 'Promesas', url: '/promesas' },
        // { titulo: 'RxJs', url: '/rxjs' }
      ]
    }
  ];
  constructor() { }
}
