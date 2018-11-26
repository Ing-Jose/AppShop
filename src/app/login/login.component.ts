import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string; // para recordar el cooreo
  // recuerdame: boolean = false;
  
  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
    // console.log('dsdds');
    
  }

  ingresar() {
  // ingresar(forma: NgForm) {
    console.log('ingresando');
    this.router.navigate(['/dashboard']);
    
    // if (forma.invalid) {
    //   return;
    // }
    // let usuario = new Usuario(null, forma.value.correo, forma.value.password);
    // this._usuarioService.login(usuario, forma.value.recuerdame)
    //   .subscribe(resp => {
    //     // console.log(resp);
    //     // window.location.href = '#/dashboard';
    //     this.router.navigate(['/dashboard']);
    //   })
    // console.log(forma.valid);
    // console.log(forma.value);

    // this.router.navigate([ '/dashboard' ]);

  }
  

}
