import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition} from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  /** string para cambiar el nombre de la pagina dimanicamente */
  // tslint:disable-next-line:no-inferrable-types
  nombrePage: string = '';
  // para poder leer las rutas 
  constructor(private router: Router, private _title: Title, private _m: Meta) {
    // genera un observable
      this.getData()
      .subscribe(event => {
        console.log(event);
        this.nombrePage = event.titulo;
        this._title.setTitle(event.titulo); // pone el titulo a la pestaña
        /**
         * colocando etiquetas HTML que se incorporan en el encabezado de una página web
         */
        let metaTags: MetaDefinition = {
          name: 'description', 
          content: this.nombrePage
        };
        this._m.updateTag(metaTags);
        

      });
    this._m.addTag({ name: 'author', content: 'Jose Carreño'});
   }

  ngOnInit() {
  }

  getData() {
    return this.router.events
      // filtrando retorna un true 
      .pipe(filter(evento => evento instanceof ActivationEnd))
      // filtrando para que solo muestre el que tiene la data con el titulo de la pagina
      .pipe(filter((evento: ActivationEnd) => evento.snapshot.firstChild === null))
      // retornar solo el data que contiene el titulo que pusimos en la ruta
      .pipe(map((evento: ActivationEnd) => evento.snapshot.data));
  }
}
