import {CARDS_DELETE_VALUE, CARDS_VALUE_RHT} from "../types";

const initialState = {
    cards: [

    ]
}

export const cardsListRhtReducer = (state = initialState, action) => {

    switch(action.type) {
        case CARDS_VALUE_RHT:
            return{
                ...state,
                cards: [...state.cards, ...action.cards]
            }
        default: return state
    }

}
