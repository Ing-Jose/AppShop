import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  // Valores por defectos
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };
  constructor(@Inject(DOCUMENT) private _document ) { 
    this.cargarAjustes();
  }
  /**
   * funciones que permiten guardar en localStore
   * el tema seleccionando por el usuario
   * JSON.stringify para convertir el obj en string
   */
  guardarAjustes() {
    // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
  cargarAjustes() {
    // preguntamos si el localStore existe la propiedad ajustes
    if (localStorage.getItem('ajustes')) {
      // pasamos el string a objeto JSON.parse y se almacena en ajuste
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log( 'Cargando del localstorage' );
      // llamamos la funcion con la informacio que tenimos en el localStorage
      this.aplicarTema(this.ajustes.tema);

    } else {
      // console.log( 'Usando valores por defecto' );
      this.aplicarTema(this.ajustes.tema);
    }

  }
  aplicarTema(tema: string) {


    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }
}
interface Ajustes {
  temaUrl: string;
  tema: string;
}
