export class Book {
    constructor(public title: string,
                public author: string,
                public lendStatus: boolean) {
        this.title = title;
        this.author = author;
        this.lendStatus = lendStatus;
    } 
}