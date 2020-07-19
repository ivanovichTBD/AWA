import { Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {
  constructor(public router:Router){
    
  }
  verActividades(){
    this.router.navigate(['ver-actividades']);
  }
  hacerActividades(){
    this.router.navigate(['hacer-actividades']);
  }
  escribirTexto(){
    this.router.navigate(['escribir-texto']);
  }
  grabarAudio(){
    this.router.navigate(['grabar-audio']);
  }
  seguimientoEstudiante(){
    this.router.navigate(['seguimiento-estudiante']);
  }

  
 
  


}
