import { Component, OnInit, ComponentFactoryResolver,
        ViewChild} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { DataService } from '../../../services/data.service';
import { Book } from '../../../models/book';
import { AdDirective } from '../../../components/ad.directive';
import { UsernameForm } from '../../../components/username-form/username-form';
import { Subscription } from 'rxjs';


@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {
  book: Book;
  index: number;
  usernameFormSubscription: Subscription;
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(public navParams: NavParams,
              private dataService: DataService,
              private viewCtrl: ViewController,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.dataService.booksList[this.index];
    this.usernameFormSubscription = this.dataService.usernameFormSubject
      .subscribe(() => {
        this.unloadComponent();
      });
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleLendBook() {
    this.loadComponent();
  }

  onBringbackBook() {
    this.dataService.toggleLendBook(this.index);
    this.dataService.booksList[this.index].lendname = null;
    this.book.isLend = this.dataService.booksList[this.index].isLend;
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(UsernameForm);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let data = {title: 'livre',  index: this.index}

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<UsernameForm>componentRef.instance).data = data;
  }

  unloadComponent() {
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    console.log('unload');
  }

}
