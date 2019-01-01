import { Book } from "../models/book";
import { Cd } from "../models/cd";
import { Subject } from 'rxjs';

export class DataService {
    usernameFormSubject = new Subject<any>();

    booksList: Book[] = [
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

    cdsList: Cd[] = [
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
}