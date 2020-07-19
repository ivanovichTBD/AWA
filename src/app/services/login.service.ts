import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { User } from '../shared/user.interface';
import * as firebase from 'firebase';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';

import {promise} from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private AFauth:AngularFireAuth,private afs: AngularFirestore) {}

    login(email:string,password:string){
      return new Promise((resolve,rejects)=>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user=>{
        
        resolve(user)
      }).catch(error=>rejects(error));
    })
    }
    async loginGoogle(): Promise<User> {
      try {
        const { user } = await this.AFauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        this.updateUserData(user);
        return user;
      } catch (error) {
        console.log('Error->', error);
      }
    }
    private updateUserData(user: User) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
  
      const data: User = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        displayName: user.displayName,
      };
  
      return userRef.set(data, { merge: true });
    }
    isEmailVerified(user: User): boolean {
      return user.emailVerified === true ? true : false;
    }
  
  
}
