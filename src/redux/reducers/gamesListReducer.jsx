import {GAMES_LIST, THREE_CARDS_DEALING} from "../types";

const initialState = {
    list: []
    // games: [
    //     {
    //         id: '1',
    //         title: "Шахматы японские",
    //         icon: "images/icons/chess.svg",
    //         image: "images/main-page/games/image-9.png",
    //         catalog_id: ["0", "1"],
    //         data: {
    //             text: "В игре \"Дурак Онлайн\" вашей задачей будет быстрее победить соперников и освободиться от всех карт. Как только до вас будут ходить, отбивайтесь картами соответствующей масти или ели нет тогда козырем. Ходите на соперников такими картами, которые соперник не сможет отбить. Вы должны стать лучшим игроком карточного онлайн дурака, чтобы им не стать! И таким образом повторю этот текст снова: В игре \"Дурак Онлайн\" вашей задачей будет быстрее победить соперников и освободиться от всех карт. Как только до вас будут ходить, отбивайтесь картами соответствующей масти или ели нет тогда козырем. Ходите на соперников такими картами, которые соперник не сможет отбить. Вы должны стать лучшим игроком карточного онлайн дурака!",
    //             max_gamers: 10,
    //             currency: {
    //                 money: true,
    //                 chips: true,
    //             },
    //             type_rooms: {
    //                 open_rooms: true,
    //                 close_rooms: true,
    //             }
    //         }
    //     },
    // ]
}

export const gamesListReducer = (state = initialState, action) => {
    switch(action.type) {
        case GAMES_LIST:
            return {
                ...state,
                list: action.list
            }
        default: return state
    }
}

export function setGamesList(list) {
    return{
        type: GAMES_LIST,
        list
    }
}