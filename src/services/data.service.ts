import { Book } from "../models/book";
import { Cd } from "../models/cd";

export class DataService {
    booksList: Book[] = [
        {
            title: 'Mastering TypeScript - Second Edition eBook',
            author: 'Nathan Rozentals',
            isLend: false
        },
        {
            title: 'Mastering JavaScript',
            author: 'Ben Fhala',
            isLend: true
        },
        {
            title: 'Angular 2 Cookbook',
            author: 'Matt Frisbie',
            isLend: false
        },
    ];

    cdsList: Cd[] = [
        {
            artist: 'Daft Punk',
            album: 'Random Access Memories',
            isLend: false
        },
        {
            artist: 'David Guetta',
            album: 'Nothing but the Beat',
            isLend: false
        },
        {
            artist: 'David Guetta',
            album: 'Seven "7"',
            isLend: true
        },
        {
            artist: 'Avicii',
            album: 'Stories',
            isLend: false
        },
        {
            artist: 'Daft Punk',
            album: 'Human After All',
            isLend: true
        }
    ];

    toggleLendBook(index: number) {
        this.booksList[index].isLend = !this.booksList[index].isLend;
    }

    toggleLendCd(index: number) {
        this.cdsList[index].isLend = !this.cdsList[index].isLend;
    }
}