import {Artist} from "./ArtistSchema";

export const User = {
    id: Number,
    username: String,
    password: String,
    likes: [Artist]
}