import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {firebase} from '@firebase/app';
import {firebaseConfig} from '../environments/environment';
import { AngularFireMessaging } from '@angular/fire/messaging';
import {FcmService} from '../app/services/fcm.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afMessaging: AngularFireMessaging,
    private FcmServ: FcmService
    
  ) {
    this.initializeApp();
  }

  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  ngAfterViewInit() {
    this.platform.ready().then(async () => {
       await this.FcmServ.requestPermission();
    });
}
async ngOnInit() {
  firebase.initializeApp(firebaseConfig);
  await this.FcmServ.init();
}  

}
