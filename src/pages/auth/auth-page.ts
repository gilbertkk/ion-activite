import { Component, OnInit } from '@angular/core';
import { MenuController, NavParams, NavController } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs'; 

@Component({
    selector: 'page-auth',
    templateUrl: 'auth-page.html'
})

export class AuthPage implements OnInit {
    mode: string;
    authForm: FormGroup;
    errorMessage: string;

    constructor(private menuCtr: MenuController,
                private navParams: NavParams,
                private formBuilder: FormBuilder,
                private authService: AuthService,
                private navCtrl: NavController) {}

    ngOnInit() {
        this.mode = this.navParams.get('mode');
        this.initForm();
    }

    initForm() {
        this.authForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
    
    onToggleMenu() {
        this.menuCtr.open();
    }

    onSubmitForm() {
        const email = this.authForm.get('email').value;
        const password = this.authForm.get('password').value;
        if (this.mode === 'new') {
          this.authService.signUpUser(email, password).then(
            () => {
              this.navCtrl.setRoot(TabsPage);
            },
            (error) => {
              this.errorMessage = error.message;
            }
          );
        } else if (this.mode === 'connect') {
          this.authService.signInUser(email, password).then(
            () => {
              this.navCtrl.setRoot(TabsPage);
            },
            (error) => {
              this.errorMessage = error.message;
            }
          );
        }
      }
}