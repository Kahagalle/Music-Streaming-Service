export class CreateUserDto {

    username: string;
    password: string;
    likes: any[];

    constructor() {
        this.username = "";
        this.password = "";
        this.likes = [];
    }
}