export class Book {
    constructor(public title: string,
                public author: string,
                public isLend: boolean,
                public lendname: string) {
        this.title = title;
        this.author = author;
        this.isLend = isLend;
        this.lendname = lendname;
    } 
}