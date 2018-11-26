import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-setting',
  templateUrl: './accout-setting.component.html',
  styles: []
})
export class AccoutSettingComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(tema: string, link: any) {
    
    // let url = `assets/css/colors/${tema}.css`;
    // // console.log(url);
    // this._document.getElementById('tema').setAttribute('href', url);
    this.aplicarCheck(link);

    this._ajustes.aplicarTema(tema);

  }
  aplicarCheck(link: any) {
    // crea un arreglo con todo los li que tienen la clase selector
    let selectores: any = document.getElementsByClassName('selector');
    // para remover de todo los li la clase working
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    // aplica la clase working a li seleccionando
    link.classList.add('working');

  }
  colocarCheck() {
    // creando el array
    let selectores: any = document.getElementsByClassName('selector');
    // Obtengo el tema 
    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores) {
      // preguntamos por el tema seleccionando
      if (ref.getAttribute('data-theme') === tema) { 
        // se coincide agregamos la clase working
        ref.classList.add('working');
        break; // terminamos el ciclo for
      }
    }

  }
}
