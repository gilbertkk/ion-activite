import { Book } from "../models/book";
import { Cd } from "../models/cd";

export class DataService {
    booksList: Book[] = [
        {
            title: 'titre 1',
            author: 'auteur 1',
            lendStatus: false
        },
        {
            title: 'titre 2',
            author: 'auteur 2',
            lendStatus: true
        },
        {
            title: 'titre 3',
            author: 'auteur 3',
            lendStatus: false
        },
    ];

    cdsList: Cd[] = [
        {
            artist: 'artist 1',
            album: 'album 1',
            lendStatus: false
        },
        {
            artist: 'artiste 2',
            album: 'album 2',
            lendStatus: true
        }
    ];
}