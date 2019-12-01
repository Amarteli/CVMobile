import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import 'firebase/auth';
/* Ari Martelius, 1800582 */
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  newEmail;
  newPassword;
  tabBarElement: any;
  constructor(public navCtrl: NavController) { }

  /* registering new user */
  ngOnInit() {
    this.tabBarElement = document.getElementById('hidemain');
    this.tabBarElement.style.display = 'none';
      }

  registerUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        res => {resolve(res),
            this.navCtrl.navigateRoot('/tabs'); },
        err => reject(err));

    });
  }

}
