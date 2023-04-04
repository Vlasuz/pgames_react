import {ALL_CARDS} from "../types_poker";

const initialState = {
    cards: [
        {
            status: false,
            card: {id: 1, card_type: 2, card_suit: 1},
        },
        {
            status: false,
            card: {id: 2, card_type: 2, card_suit: 2},
        },
        {
            status: false,
            card: {id: 3, card_type: 2, card_suit: 3},
        },
        {
            status: false,
            card: {id: 4, card_type: 2, card_suit: 4},
        },
        {
            status: false,
            card: {id: 5, card_type: 3, card_suit: 1},
        },
        {
            status: false,
            card: {id: 6, card_type: 3, card_suit: 2},
        },
        {
            status: false,
            card: {id: 7, card_type: 3, card_suit: 3},
        },
        {
            status: false,
            card: {id: 8, card_type: 3, card_suit: 4},
        },
        {
            status: false,
            card: {id: 9, card_type: 4, card_suit: 1},
        },
        {
            status: false,
            card: {id: 10, card_type: 4, card_suit: 2},
        },
        {
            status: false,
            card: {id: 11, card_type: 4, card_suit: 3},
        },
        {
            status: false,
            card: {id: 12, card_type: 4, card_suit: 4},
        },
        {
            status: false,
            card: {id: 13, card_type: 5, card_suit: 1},
        },
        {
            status: false,
            card: {id: 14, card_type: 5, card_suit: 2},
        },
        {
            status: false,
            card: {id: 15, card_type: 5, card_suit: 3},
        },
        {
            status: false,
            card: {id: 16, card_type: 5, card_suit: 4},
        },
        {
            status: false,
            card: {id: 17, card_type: 6, card_suit: 1},
        },
        {
            status: false,
            card: {id: 18, card_type: 6, card_suit: 2},
        },
        {
            status: false,
            card: {id: 19, card_type: 6, card_suit: 3},
        },
        {
            status: false,
            card: {id: 20, card_type: 6, card_suit: 4},
        },
        {
            status: false,
            card: {id: 21, card_type: 7, card_suit: 1},
        },
        {
            status: false,
            card: {id: 22, card_type: 7, card_suit: 2},
        },
        {
            status: false,
            card: {id: 23, card_type: 7, card_suit: 3},
        },
        {
            status: false,
            card: {id: 24, card_type: 7, card_suit: 4},
        },
        {
            status: false,
            card: {id: 25, card_type: 8, card_suit: 1},
        },
        {
            status: false,
            card: {id: 26, card_type: 8, card_suit: 2},
        },
        {
            status: false,
            card: {id: 27, card_type: 8, card_suit: 3},
        },
        {
            status: false,
            card: {id: 28, card_type: 8, card_suit: 4},
        },
        {
            status: false,
            card: {id: 29, card_type: 9, card_suit: 1},
        },
        {
            status: false,
            card: {id: 30, card_type: 9, card_suit: 2},
        },
        {
            status: false,
            card: {id: 31, card_type: 9, card_suit: 3},
        },
        {
            status: false,
            card: {id: 32, card_type: 9, card_suit: 4},
        },
        {
            status: false,
            card: {id: 33, card_type: 10, card_suit: 1},
        },
        {
            status: false,
            card: {id: 34, card_type: 10, card_suit: 2},
        },
        {
            status: false,
            card: {id: 35, card_type: 10, card_suit: 3},
        },
        {
            status: false,
            card: {id: 36, card_type: 10, card_suit: 4},
        },
        {
            status: false,
            card: {id: 37, card_type: 11, card_suit: 1},
        },
        {
            status: false,
            card: {id: 38, card_type: 11, card_suit: 2},
        },
        {
            status: false,
            card: {id: 39, card_type: 11, card_suit: 3},
        },
        {
            status: false,
            card: {id: 40, card_type: 11, card_suit: 4},
        },
        {
            status: false,
            card: {id: 41, card_type: 12, card_suit: 1},
        },
        {
            status: false,
            card: {id: 42, card_type: 12, card_suit: 2},
        },
        {
            status: false,
            card: {id: 43, card_type: 12, card_suit: 3},
        },
        {
            status: false,
            card: {id: 44, card_type: 12, card_suit: 4},
        },
        {
            status: false,
            card: {id: 45, card_type: 13, card_suit: 1},
        },
        {
            status: false,
            card: {id: 46, card_type: 13, card_suit: 2},
        },
        {
            status: false,
            card: {id: 47, card_type: 13, card_suit: 3},
        },
        {
            status: false,
            card: {id: 48, card_type: 13, card_suit: 4},
        },
        {
            status: false,
            card: {id: 49, card_type: 14, card_suit: 1},
        },
        {
            status: false,
            card: {id: 50, card_type: 14, card_suit: 2},
        },
        {
            status: false,
            card: {id: 51, card_type: 14, card_suit: 3},
        },
        {
            status: false,
            card: {id: 52, card_type: 14, card_suit: 4},
        },
    ]
}

export const allCardsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ALL_CARDS:
            return{
                ...state,
                cards: [...state.cards, ...action.cards]
            }
        default: return state
    }

}
