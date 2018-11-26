import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  // importando el servicio para el menu
  constructor(public _sidebarService: SidebarService) { }

  ngOnInit() {
  }

}
