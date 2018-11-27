export class Book {
    constructor(public title: string,
                public author: string,
                public isLend: boolean) {
        this.title = title;
        this.author = author;
        this.isLend = isLend;
    } 
}