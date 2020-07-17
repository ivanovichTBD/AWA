import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {promise} from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private AFauth:AngularFireAuth) {}

    login(email:string,password:string){
      return new Promise((resolve,rejects)=>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user=>{
        
        resolve(user)
      }).catch(error=>rejects(error));
    })
    }

}
