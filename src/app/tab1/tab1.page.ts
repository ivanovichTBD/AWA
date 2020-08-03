import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() { }
  notificationPermit(){
    Notification.requestPermission(function(result){
      if (result !== 'granted'){
        console.log("Notification permit: REJECTED")
      } else{ 
          console.log("Notification permit: ", result);
        var notification = new Notification("Ingresaste a una clase");
          //  subscribePush()
      }
    })}
    
  ngOn0Init() {}
}
