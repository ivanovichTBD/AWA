import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public router:Router) { 
    
  }

  ngOnInit() {

  }
  crearCurso(){
    this.router.navigate(['new-cursos-profesor'])

  }
  curso(){
    this.router.navigate(['cursos-profesor'])
  }
  admEstudiante(){
    this.router.navigate(['adm-estudiante-profesor'])
  }
  admActividades(){
    this.router.navigate(['actividad-profesor'])
  }
}
