import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login-button',
  template: `
    <button (click)="login()">Se connecter avec Firebase</button>
  `
})
export class LoginButtonComponent {
  constructor(private auth: AngularFireAuth) {}

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
