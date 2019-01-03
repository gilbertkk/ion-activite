import { Book } from "../models/book";
import { Cd } from "../models/cd";
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import * as firebase from 'firebase';


@Injectable()
export class DataService {
    usernameFormSubject = new Subject<any>();

    booksList: Book[];

    cdsList: Cd[];

    constructor(private nativeStorage: NativeStorage){
        this.fetchListFromDevice();
    }

    toggleLendBook(index: number) {
        this.booksList[index].isLend = !this.booksList[index].isLend;
    }

    toggleLendCd(index: number) {
        this.cdsList[index].isLend = !this.cdsList[index].isLend;
    }

    emitUsernameForm() {
        this.usernameFormSubject.next();
    }

    setLendname(index: number, lendname: string, listname: string) {
        if (listname === 'books') {
            this.booksList[index].lendname = lendname;
        }

        if (listname === 'cds') {
            this.cdsList[index].lendname = lendname;
        } 
    }

    saveListToDevice() {
        return new Promise((resolve, reject) => {
            this.nativeStorage.setItem('lists', [this.booksList, this.cdsList])
            .then(() => {
                resolve();
            })
            .catch(error => {
                reject(error);
            });
        });
    }

    fetchListFromDevice() {
        this.nativeStorage.getItem('lists')
        .then((lists) => {
            if (lists.length === 2) {
                this.booksList = lists[0];
                this.cdsList = lists[1];
            }
        })
        .catch(() => {
            this.booksList = [
                {
                    title: 'Mastering TypeScript - Second Edition eBook',
                    author: 'Nathan Rozentals',
                    isLend: false,
                    lendname: null
                },
                {
                    title: 'Mastering JavaScript',
                    author: 'Ben Fhala',
                    isLend: true,
                    lendname: 'john'
                },
                {
                    title: 'Angular 2 Cookbook',
                    author: 'Matt Frisbie',
                    isLend: false,
                    lendname: null
                },
            ];
    
            this.cdsList = [
                {
                    artist: 'Daft Punk',
                    album: 'Random Access Memories',
                    isLend: false,
                    lendname: null
                },
                {
                    artist: 'David Guetta',
                    album: 'Nothing but the Beat',
                    isLend: false, 
                    lendname: null
                },
                {
                    artist: 'David Guetta',
                    album: 'Seven "7"',
                    isLend: true,
                    lendname: 'Laura'
                },
                {
                    artist: 'Avicii',
                    album: 'Stories',
                    isLend: false,
                    lendname: null
                },
                {
                    artist: 'Daft Punk',
                    album: 'Human After All',
                    isLend: true,
                    lendname: 'Lisa'
                }
            ];
        });
    }

    saveToBackend() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {reject('Problème de connexion internet')}, 10000);
            firebase.database().ref('data')
                .set([this.booksList, this.cdsList]).then(
              (data: firebase.database.DataSnapshot) => {
                resolve('Données sauvegardées avec succès');
              },
              (error) => {
                reject(error);
              }
            );
        }); 
    }

    fetchFromBackend() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {reject('Problème de connexion internet')}, 10000);
            firebase.database().ref('data').once('value').then(
              (data: firebase.database.DataSnapshot) => {
                const lists = data.val();
                this.booksList = lists[0];
                this.cdsList = lists[1];
                this.saveListToDevice().then(()=>{}, ()=>{});
                resolve('Données récupérées avec succès !');
              }, (error) => {
                reject(error);
              }
            );
        });
    }
}