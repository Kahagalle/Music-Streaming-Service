import {ExtendPlaylistService} from "./services/ExtendPlaylistService";
import {UserService} from "./services/UserService";

let currentPlaylist: Array<any> = [];

function handler(username: string) {

    const userService = new UserService();

    userService.getUser(username)
        .then((user: any) => {
            if (user && user.likes) {
                const playlistService = new ExtendPlaylistService(currentPlaylist);
                currentPlaylist = playlistService.regeneratePlaylist(user.likes);
            }
        });
}

export default handler;
