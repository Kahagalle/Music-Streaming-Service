import {IPlaylistService} from "./IPlaylistService";

export class RandomPlaylistService implements IPlaylistService {
    private currentPlaylist: Array<any>;

    constructor(currentPlaylist: Array<any>) {
        this.currentPlaylist = currentPlaylist;
    }

    /**
     * Randomly regenerate playlist with new artists
     */
    public regeneratePlaylist(newArtists: Array<any>): Array<any> {
        //TODO: Randomly place newArtists in the current plalist
        return this.currentPlaylist;
    }
}
