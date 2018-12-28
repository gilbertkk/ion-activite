import * as firebase from 'firebase';
import { resolveDefinition } from '../../node_modules/@angular/core/src/view/util';

export class AuthService { 
    isAuth = false;

    constructor() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.isAuth = true;
            } else {
                this.isAuth = false;
            }
        });
    }

    signUpUser(email: string, password: string) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                resolve(user);
            })
            .catch((error) => {
                reject(error);
            });
        } );
    }

    signInUser(email: string, password: string) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                resolve(user);
            })
            .then((error) => {
                reject(error);
            });
        });
    }

    signOut() {
        firebase.auth().signOut();
    }
}