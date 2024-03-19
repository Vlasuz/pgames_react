import any = jasmine.any;

export interface IUser {
    avatar: null | string
    balance: number
    chips_balance: string
    email: string
    id: string
    username: string
}

export interface IAuth {
    access_token: string
    refresh_token: string
    user: IUser
}

export interface IGame {
    name: string
    slug: string
    image: string
}
export interface IGames {
    game: IGame[]
    name: string
    slug: string
}
export interface IRoom {
    bet: number
    bet_type: string
    created_at: string
    game: IGame
    id: string
    player_slots: number
    players: null | IPlayer
    players_count: number
    room_type: string
}
export interface  INews {
    name: string
    slug: string
    image: string
    text: string
    created_at: string
}

export interface IPlayerUser {
    id: string
    username: string
    name: string
    avatar: string
    position: number
    is_connected: boolean
    ready: boolean
}

export interface IPlayer {
    user: IPlayerUser
    position: number
}

export interface ICard {
    rank: string
    suit: string
}

export interface IGameInfo {
    name: string
    slug: string
    image: string
    description: string
    max_players: number
    game_currencies: string[]
    room_types: string[]
}

export interface ISelectOption {
    title: string
    slug: string
    isActive?: boolean
}

export interface IPaymentHistory {
    amount: string;
    created_at: string;
    currency_type: string;
    service: string;
}

export interface IContacts {
    facebook: string;
    instagram: string;
    support_email: string;
    support_phone_number: string;
    telegram: string;
    twitter: string;
}
