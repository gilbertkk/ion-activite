import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Cd } from '../../models/cd';


@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {
  cdsList: Cd[];

  constructor(private dataService: DataService) {}

  ionViewWillEnter() {
    this.cdsList = this.dataService.cdsList.slice();
  }
}
