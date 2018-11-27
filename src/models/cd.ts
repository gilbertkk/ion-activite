export class Cd {
    constructor(public artist: string, 
                public album: string,
                public isLend: boolean) {
        this.artist = artist;
        this.album = album;
        this.isLend = isLend;
    }
}