import {IContacts, IGames, IRoom, IUser} from "../models";

export const initialState = () => {
    return {
        user: <IUser | object>{},
        notification: <string[]>[],
        games: <IGames[]>[],
        rooms: <IRoom[]>[],
        contacts: <IContacts>{},
    }
}