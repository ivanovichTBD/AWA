import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-new-cursos-profesor',
  templateUrl: './new-cursos-profesor.page.html',
  styleUrls: ['./new-cursos-profesor.page.scss'],
})
export class NewCursosProfesorPage implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async showAlert() {  
    const alert = await this.alertCtrl.create({  
    
      message: 'incribirse a una clases',
      buttons: ['Cancelar', 'Crear'] 
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  
  

}
