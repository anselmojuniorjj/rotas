import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';



const appRoutes: Routes = [
  { path: 'cursos', loadChildren: '../app/cursos/cursos.module#CursosModule' },
  { path: 'alunos', loadChildren: '../app/alunos/alunos.module#AlunosModule' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
