import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
              public navCtrl: NavController) {}

  ionViewWillEnter() {
    this.cdsList = this.dataService.cdsList.slice();
  }

  onLoadCd(index: number) {
    this.navCtrl.push(LendCdPage, {index: index});
  }
}
