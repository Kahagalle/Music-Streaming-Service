import {UserRepository} from "../repositories/UserRepository";
import {ArtistRepository} from "../repositories/ArtistRepository";
import {CreateUserDto} from "../dtos/CreateUserDto";

import * as Q from "q";

export class UserService {

    private userRepository: UserRepository;
    private artistRepository: ArtistRepository;

    constructor() {
        this.userRepository = new UserRepository();
        this.artistRepository = new ArtistRepository();
    }

    /**
     * Return a user by username
     * @param {string} username
     */
     public getUser(username: string): any {
        return this.userRepository.getUser(username);
    }

    /**
     * Create a new user
     * @param {CreateUserDto} user
     */
    public createUser(user: CreateUserDto): any {
        return Q.fcall(() => {
                if (user.likes && user.likes.length) {
                    return this.artistRepository.createArtists(user.likes)
                } 
            })
            .then(() => {
                return this.userRepository.createUser(user); 
            });
    }
}
