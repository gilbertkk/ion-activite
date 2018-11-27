import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { Book } from '../../models/book';
import { LendBookPage } from './lend-book/lend-book';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  booksList: Book[];
  constructor(private dataService: DataService,
              public navCtrl: NavController) {}

  ionViewWillEnter() {
    this.booksList = this.dataService.booksList.slice();
  }

  onLoadBook(index: number) {
    this.navCtrl.push(LendBookPage, {index: index});
  }
}
