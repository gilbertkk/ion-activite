import { Book } from "../models/book";
import { Cd } from "../models/cd";

export class DataService {
    booksList: Book[] = [
        {
            title: 'titre 1',
            author: 'auteur 1',
            isLend: false
        },
        {
            title: 'titre 2',
            author: 'auteur 2',
            isLend: true
        },
        {
            title: 'titre 3',
            author: 'auteur 3',
            isLend: false
        },
    ];

    cdsList: Cd[] = [
        {
            artist: 'artist 1',
            album: 'album 1',
            isLend: false
        },
        {
            artist: 'artiste 2',
            album: 'album 2',
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