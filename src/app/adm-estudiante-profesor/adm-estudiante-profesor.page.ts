import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-adm-estudiante-profesor',
  templateUrl: './adm-estudiante-profesor.page.html',
  styleUrls: ['./adm-estudiante-profesor.page.scss'],
})
export class AdmEstudianteProfesorPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  listaMatematicas(){
    this.router.navigate(['lista-estudiantes-ma']);
  }
  listaFisica(){
    this.router.navigate(['lista-estudiantes-fi']);
  }
  listaMatematicas1(){
    this.router.navigate(['lista-estudiantes-ma1']);
  }

}
