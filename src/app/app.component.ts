import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  settingsPage: any = SettingsPage;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAZnX9hlyHm5o6N8YhaoJkzRfWVO76l5pQ",
        authDomain: "activite-92195.firebaseapp.com",
        databaseURL: "https://activite-92195.firebaseio.com",
        projectId: "activite-92195",
        storageBucket: "activite-92195.appspot.com",
        messagingSenderId: "141654686161"
      };
      firebase.initializeApp(config);

    });
  }

  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

