import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit() {}

  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        //this.redirectUser(isVerified);
        console.log('verified->', isVerified);
      }
    }
    catch(error){
      console.log('Error->', error);}
  }

  async onLoginGoogle(){
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        //this.redirectUser(isVerified);
        console.log('verified->', isVerified);
      }
    } catch (error) {
    console.log('Error->', error);
   }
  }
redirectUser(isVerified: boolean){
  if(isVerified){
    this.router.navigate([''])
  } else {
    //else VerifiecationPage
  }
}
}
