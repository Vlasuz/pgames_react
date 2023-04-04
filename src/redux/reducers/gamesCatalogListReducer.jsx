import { GAMES_CATALOG } from "../types";

const initialState = {
    catalog: [
        {
            id: '0',
            title: "Популярное",
            icon: "images/icons/hot.svg"
        },
        {
            id: '1',
            title: "Шахматы",
            icon: "images/icons/chess.svg"
        },
        {
            id: '2',
            title: "Шашки",
            icon: "images/icons/chess.svg"
        },
        {
            id: '3',
            title: "Карточные",
            icon: "images/icons/cards.svg"
        },
    ]
}

export const GamesCatalogListReducer = (state = initialState, action) => {

    switch(action.type) {
        case GAMES_CATALOG:
            return {
                ...state,
                // text: action.text
            }
        default: return state
    }

}