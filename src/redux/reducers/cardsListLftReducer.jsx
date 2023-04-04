import {CARDS_DELETE_VALUE, CARDS_VALUE_LFT} from "../types";

const initialState = {
    cards: [

    ]
}

export const cardsListLftReducer = (state = initialState, action) => {

    switch(action.type) {
        case CARDS_VALUE_LFT:
            return{
                ...state,
                cards: [...state.cards, ...action.cards]
            }
        default: return state
    }

}
