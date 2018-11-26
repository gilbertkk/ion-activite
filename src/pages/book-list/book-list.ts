import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Book } from '../../models/book';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  booksList: Book[];
  constructor(private dataService: DataService) {}

  ionViewWillEnter() {
    this.booksList = this.dataService.booksList.slice();
  }
}
