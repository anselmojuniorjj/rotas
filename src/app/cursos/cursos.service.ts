import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Java'}
    ];
  }

  getCurso(id: number) {
    // tslint:disable-next-line:prefer-const
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      // tslint:disable-next-line:prefer-const
      let curso = cursos[i];
      // tslint:disable-next-line:triple-equals
      if (curso.id == id) {
        console.log(curso);
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
