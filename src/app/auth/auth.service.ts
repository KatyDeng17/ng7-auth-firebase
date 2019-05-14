import { Injectable } from '@angular/core';
//import angularFireAuth


import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

//login using OAuth; 
  login(){
    console.log('user logged in from auth.service.ts with privated oauth')
    this.angularFireAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider);
  }
}
