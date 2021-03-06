import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookListPage } from '../pages/book-list/book-list';
import { CdListPage } from '../pages/cd-list/cd-list';
import { TabsPage } from '../pages/tabs/tabs';
import { DataService } from '../services/data.service';
import { LendBookPage } from '../pages/book-list/lend-book/lend-book';
import { LendCdPage } from '../pages/cd-list/lend-cd/lend-cd';
import { SettingsPage } from '../pages/settings/settings';
import { AuthService } from '../services/auth.service';
import { AuthPage } from '../pages/auth/auth-page';
import { UsernameForm } from '../components/username-form/username-form';
import { AdDirective } from '../components/ad.directive';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    TabsPage,
    LendBookPage,
    LendCdPage,
    SettingsPage,
    AuthPage,
    UsernameForm,
    AdDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    TabsPage,
    LendBookPage,
    LendCdPage,
    SettingsPage, 
    AuthPage,
    UsernameForm
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService,
    AuthService,
    NativeStorage
  ]
})
export class AppModule {}
