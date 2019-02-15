import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private _router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'anselmo' && usuario.senha === '1234') {
      this._usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this._router.navigate(['/home']);
    } else {
      this._usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
}
