import { Component } from '@angular/core';
import { MenuController, ToastController,
   LoadingController } from 'ionic-angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(public menuCtrl: MenuController,
              private dataService: DataService,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController) {}

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onSaveToBackend() {
    let loader = this.loadingCtrl.create({
      content: 'sauvegarde des données...'
    });
    loader.present();
    this.dataService.saveToBackend().then(
      (message: string) => {
        this.toastCtrl.create({
          message: message,
          duration: 3000,
          position: 'bottom'
        }).present();
        loader.dismiss();
      },
      (error) => {
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
        loader.dismiss();
      }
    );
  }

  onRestoreFromBackend() {
    let loader = this.loadingCtrl.create({
      content: 'Récupération des données...'
    });
    loader.present();
    this.dataService.fetchFromBackend().then(
      (message: string) => {
        this.toastCtrl.create({
          message: message,
          duration: 3000,
          position: 'bottom'
        }).present();
        loader.dismiss();
      },
      (error) => {
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
        loader.dismiss();
       
      }
    );
  }
}
