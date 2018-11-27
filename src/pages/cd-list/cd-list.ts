import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { Cd } from '../../models/cd';
import { LendCdPage } from '../cd-list/lend-cd/lend-cd';


@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
  cdsList: Cd[];

  constructor(private dataService: DataService,
              public modalCtrl: ModalController,
              public menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.cdsList = this.dataService.cdsList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
