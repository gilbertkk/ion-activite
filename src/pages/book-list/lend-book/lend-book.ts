import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { DataService } from '../../../services/data.service';
import { Book } from '../../../models/book';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {
  book: Book;

  constructor(public navParams: NavParams,
              private dataService: DataService,
              public viewCtrl: ViewController) {}

  ngOnInit() {
    let index = this.navParams.get('index');
    this.book = this.dataService.booksList[index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
