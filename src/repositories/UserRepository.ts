import {CreateUserDto} from "../dtos/CreateUserDto";

export class UserRepository {

    constructor() {}

    /**
     * Return a user by username
     * @param {string} username
     */
    public getUser(username: string): any {
        // TODO: Fetch user from db
        return ;
    }

    /**
     * Create a new user
     * @param {CreateUserDto} user
     */
    public createUser(user: CreateUserDto): any {
        // TODO: Create user in the db
        return ;
    }
}
