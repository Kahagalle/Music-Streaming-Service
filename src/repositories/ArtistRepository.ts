import {CreateArtistDto} from "../dtos/CreateArtistDto";

export class ArtistRepository {

    constructor() {}

    /**
     * Return a artist by id
     * @param {number} id
     */
    public getArtist(id: number): any {
        // TODO: Fetch artist from db
        return ;
    }

    /**
     * Create a new artist
     * @param {CreateArtistDto} artist
     */
    public createArtists(artists: Array<CreateArtistDto>): any {
        // TODO: Create artists in the db
        return ;
    }
}
