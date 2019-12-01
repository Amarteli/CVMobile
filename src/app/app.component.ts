import { Component } from '@angular/core';
import firebaseConfig from './config/firebase';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';
import { LoginPage } from './login/login.page';
/* Ari Martelius, 1800582
  Here i created sidemenu */

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  /* navigation */
  navigate: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      firebase.initializeApp(firebaseConfig);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  /* sidemenu links, linking thru tabs-page */
  sideMenu()  {
    this.navigate =
    [
      {
        title : 'About me',
        url   : 'tabs/about'
      },
      {
        title : 'CV',
        url   : 'tabs/targetcv'
      },
      {
        title : 'Project work',
        url   : 'tabs/projectwork'
      },
      {
        title : 'Extra curriculum',
        url   : 'tabs/extracurr'
      },
      {
        title : 'Contact info',
        url   : 'tabs/contactinfo'
      },
      {
        title : 'Log out',
        url   : 'login',
      },
    ];
  }
}
