export class Cd {
    constructor(public artist: string, 
                public album: string,
                public lendStatus: boolean) {
        this.artist = artist;
        this.album = album;
        this.lendStatus = lendStatus;
    }
}