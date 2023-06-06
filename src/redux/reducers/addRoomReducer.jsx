import { ADD_ROOM_FOR_GAME } from "../types";

const initialState = {
    rooms: [
        {
            id: 0,
            gameIs: 'Дурак',
            icon: "images/icons/cards.svg",
            title: "Дурак классический",
            currency: "money",
            cost: 1299,
            date: ["12.03.2022", "12:43"],
            people: {
                nowLength: 4,
                maxLength: 10,
            },
            isAccess: false,
            typeOfGame: 'default',
            gamers: [
                {
                    id: 0,
                    name: 'Jared_007',
                    photo: "../images/account/avatar.png"
                },
                {
                    id: 1,
                    name: 'MegaGamer',
                    photo: "../images/account/avatar.png"
                },
            ]
        },
        {
            id: 1,
            gameIs: 'Дурак',
            icon: "images/icons/cards.svg",
            title: "1000 игра!!!",
            currency: "money",
            cost: 0,
            date: ["12.03.2022", "12:43"],
            people: {
                nowLength: 4,
                maxLength: 10,
            },
            isAccess: false,
            typeOfGame: 'default',
            gamers: [
                {
                    id: 0,
                    name: 'Jared_007',
                    photo: "../images/account/avatar.png"
                },
                {
                    id: 1,
                    name: 'MegaGamer',
                    photo: "../images/account/avatar.png"
                },
            ]
        },
        {
            id: 2,
            gameIs: 'Дурак',
            icon: "images/icons/cards.svg",
            title: "Дурак классический",
            currency: "money",
            cost: 1299,
            date: ["12.03.2022", "12:43"],
            people: {
                nowLength: 4,
                maxLength: 10,
            },
            isAccess: false,
            typeOfGame: 'default',
            gamers: [
                {
                    id: 0,
                    name: 'Jared_007',
                    photo: "../images/account/avatar.png"
                },
                {
                    id: 1,
                    name: 'MegaGamer',
                    photo: "../images/account/avatar.png"
                },
            ]
        },
        {
            id: 3,
            gameIs: 'Дурак',
            icon: "images/icons/cards.svg",
            title: "Дурак классический",
            currency: "money",
            cost: 1299,
            date: ["12.03.2022", "12:43"],
            people: {
                nowLength: 4,
                maxLength: 10,
            },
            isAccess: false,
            typeOfGame: 'default',
            gamers: [
                {
                    id: 0,
                    name: 'Jared_007',
                    photo: "../images/account/avatar.png"
                },
                {
                    id: 1,
                    name: 'MegaGamer',
                    photo: "../images/account/avatar.png"
                },
            ]
        },
        {
            id: 4,
            gameIs: 'Дурак',
            icon: "images/icons/cards.svg",
            title: "Дурак классический",
            currency: "money",
            cost: 1299,
            date: ["12.03.2022", "12:43"],
            people: {
                nowLength: 4,
                maxLength: 10,
            },
            isAccess: false,
            typeOfGame: 'default',
            gamers: [
                {
                    id: 0,
                    name: 'Jared_007',
                    photo: "../images/account/avatar.png"
                },
                {
                    id: 1,
                    name: 'MegaGamer',
                    photo: "../images/account/avatar.png"
                },
            ]
        },
        {
            id: 5,
            gameIs: 'Дурак',
            icon: "images/icons/cards.svg",
            title: "Дурак классический",
            currency: "money",
            cost: 1299,
            date: ["12.03.2022", "12:43"],
            people: {
                nowLength: 4,
                maxLength: 10,
            },
            isAccess: false,
            typeOfGame: 'default',
            gamers: [
                {
                    id: 0,
                    name: 'Jared_007',
                    photo: "../images/account/avatar.png"
                },
                {
                    id: 1,
                    name: 'MegaGamer',
                    photo: "../images/account/avatar.png"
                },
            ]
        },
        {
            id: 6,
            gameIs: 'Дурак',
            icon: "images/icons/cards.svg",
            title: "Дурак классический",
            currency: "money",
            cost: 1299,
            date: ["12.03.2022", "12:43"],
            people: {
                nowLength: 4,
                maxLength: 10,
            },
            isAccess: false,
            typeOfGame: 'default',
            gamers: [
                {
                    id: 0,
                    name: 'Jared_007',
                    photo: "../images/account/avatar.png"
                },
                {
                    id: 1,
                    name: 'MegaGamer',
                    photo: "../images/account/avatar.png"
                },
            ]
        },
    ]
}

export const addRoomReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ROOM_FOR_GAME:
            return {
                ...state,
                rooms: [...state.rooms, action.data]
            }
        default: return state
    }

}