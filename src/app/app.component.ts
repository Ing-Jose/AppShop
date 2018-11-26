import { Component } from '@angular/core';
import { SettingsService } from './services/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'appShop';
  /**
   * el contructor del servicio de SettingsService llama la funcion 
   * que precarga el tema seleccionado
   * @param _ajustes para cargar el servicio de el tema en localStoge
   */
  constructor(public _ajustes: SettingsService) { }
}
