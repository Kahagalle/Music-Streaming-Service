import {IPlaylistService} from "./IPlaylistService";

export class ExtendPlaylistService implements IPlaylistService {
    private currentPlaylist: Array<any>;

    constructor(currentPlaylist: Array<any>) {
        this.currentPlaylist = currentPlaylist;
    }

    /**
     * Add new artists to end of the playlist
     */
    public regeneratePlaylist(newArtists: Array<any>): Array<any> {
        this.currentPlaylist.concat(newArtists);
        return this.currentPlaylist;
    }
}
