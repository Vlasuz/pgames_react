import {CARDS_DELETE_VALUE, CARDS_VALUE} from "../types";

const initialState = {
    cards: []
}

export const cardsListReducer = (state = initialState, action) => {

    switch(action.type) {
        case CARDS_VALUE:
            return{
                ...state,
                cards: [...state.cards, ...action.cards]
            }

        case CARDS_DELETE_VALUE:
            const newList = state.cards.filter(item => +item.id !== +action.id)
            return {
                ...state,
                cards: newList
            }
        default: return state
    }

}
