import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-hacer-actividades',
  templateUrl: './hacer-actividades.page.html',
  styleUrls: ['./hacer-actividades.page.scss'],
})
export class HacerActividadesPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  grabarAudio(){
    this.router.navigate(['grabar-audio']);
  }
  seguimientoEstudiante(){
    this.router.navigate(['seguimiento-estudiante']);
  }

}
