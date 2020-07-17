import { Component, OnInit } from '@angular/core';
import {LoginService} from './../services/login.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  email:string;
    password:string;
    constructor(private auth:LoginService,public router:Router) {
  
    }
  ngOnInit() {
  }
    Loguearse(){
  
   this.auth.login(this.email,this.password).then(res=>{
     this.router.navigate(['/tabs/tab2']);
   });
    }
    Registrarse(){
      this.router.navigate(['registro']);
    }
    
  }


