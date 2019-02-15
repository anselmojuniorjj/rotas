import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './login/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rotas';

  mostrarMenu: boolean = false;
  inscricao: Subscription;

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this.inscricao = this._authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
