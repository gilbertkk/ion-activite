import { Component, OnInit, ComponentFactoryResolver, OnDestroy,
          ViewChild } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from '../../../models/cd';
import { DataService } from '../../../services/data.service';
import { UsernameForm } from '../../../components/username-form/username-form';
import { AdDirective } from '../../../components/ad.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {
  cd: Cd;
  index: number;
  usernameFormSubscription: Subscription;
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(public navParams: NavParams,
              private dataService: DataService,
              public viewCtrl: ViewController,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.dataService.cdsList[this.index];
    this.usernameFormSubscription = this.dataService.usernameFormSubject
      .subscribe(() => {
        this.unloadComponent();
        this.dismissModal();
      });
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleLendCd() {
    this.loadComponent();
  }

  onBringBackCd() {
    this.dataService.toggleLendCd(this.index);
    this.dataService.cdsList[this.index].lendname = null;
    // Met à jour le status d'emprunt dans la page actuelle
    this.cd.isLend = this.dataService.cdsList[this.index].isLend;
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(UsernameForm);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let data = {title: 'cd',  index: this.index, targetList: 'cds'}

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<UsernameForm>componentRef.instance).data = data;
  }

  unloadComponent() {
    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
  }

  ngOnDestroy() {
    this.usernameFormSubscription.unsubscribe();
  }
}
