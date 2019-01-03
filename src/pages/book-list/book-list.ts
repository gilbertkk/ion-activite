import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { Book } from '../../models/book';
import { LendBookPage } from './lend-book/lend-book';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  booksList: Book[];

  constructor(private dataService: DataService,
              private modalCtrl: ModalController,
              private menuCtrl: MenuController, 
              private authService: AuthService) {}


  ionViewWillEnter() {
      this.booksList = this.dataService.booksList.slice();
  }



  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index})
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
