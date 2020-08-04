import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-seguimiento',
  templateUrl: './profesor-seguimiento.page.html',
  styleUrls: ['./profesor-seguimiento.page.scss'],
})
export class ProfesorSeguimientoPage implements OnInit {

  constructor() { }
  dummyList = Array(5)
  ngOnInit() {
  }
  doRefresh(event) {  
    console.log('Pull Event Triggered!');  
    setTimeout(() => {
    this.dummyList = Array(5);
    event.target.complete();
    }, 1500); 
   } 

}
