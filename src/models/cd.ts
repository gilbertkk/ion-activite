export class Cd {
    constructor(public artist: string, 
                public album: string,
                public isLend: boolean,
                public lendname: string) {
        this.artist = artist;
        this.album = album;
        this.isLend = isLend;
        this.lendname = lendname;
    }
}