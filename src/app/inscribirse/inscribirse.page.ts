import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inscribirse',
  templateUrl: './inscribirse.page.html',
  styleUrls: ['./inscribirse.page.scss'],
})
export class InscribirsePage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  notificationPermit(){
    Notification.requestPermission(function(result){
      if (result !== 'granted'){
        console.log("Notification permit: REJECTED")
      } else{ 
          console.log("Notification permit: ", result);
          var notification = new Notification('Ingresaste a una nueva clase', {
            icon: 'https://png.pngtree.com/element_our/png_detail/20181208/mathematics-icon-png_265065.jpg',
            body: 'Materia Matematicas!',
           });
           notification.onclick = function() {
            window.open('./tabs/tab2');
           };  //  subscribePush()
      }
    })}
 
  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      message: 'incribirse a una clases',
      buttons: ['Cancelar', 'Añadir'] 
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  
  

}
