import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from '../../../models/cd';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {
  cd: Cd;
  constructor(public navParams: NavParams,
              private dataService: DataService,
              public viewCtrl: ViewController) {}

  ngOnInit() {
    let index = this.navParams.get('index');
    this.cd = this.dataService.cdsList[index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
