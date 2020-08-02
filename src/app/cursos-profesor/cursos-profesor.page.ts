import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cursos-profesor',
  templateUrl: './cursos-profesor.page.html',
  styleUrls: ['./cursos-profesor.page.scss'],
})
export class CursosProfesorPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  grabarAudio(){
    this.router.navigate(['profesor-grabar'])
  }
  texto(){
    this.router.navigate(['profesor-texto'])
  }
  file(){
    this.router.navigate(['profesor-file'])
  }
  seguimiento(){
    this.router.navigate(['profesor-seguimiento'])
  }

}
