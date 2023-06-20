import {ADD_DOMINO_COUNT, REMOVE_DOMINO_COUNT, SET_CARDS_COUNT} from "../types";

const initialState = {
    users: [],
    myCards: []
}

export const reducerFoolUsersCards = (state = initialState, action) => {
    switch(action.type) {
        case SET_CARDS_COUNT:
            return {
                ...state,
                users: action.users,
                myCards: action.my_cards !== null ? action.my_cards : state.myCards
            }
        case ADD_DOMINO_COUNT:
            return {
                ...state,
                users: state.users,
                myCards: [...state.myCards, action.domino],
            }
        case REMOVE_DOMINO_COUNT:
            let indexItem = -1;

            state.myCards.map((item, index) => {
                if((item.first_side === +action.domino[0] && item.second_side === +action.domino[1]) || (item.first_side === +action.domino[1] && item.second_side === +action.domino[0])) {
                    return indexItem = index;
                }
            })

            const newArray = indexItem >= 0 ? [...state.myCards.slice(0, indexItem), ...state.myCards.slice(indexItem + 1)] : state.myCards;

            return {
                ...state,
                users: state.users,
                myCards: newArray
            }
        default: return state
    }
}

export function setUsersCards(users, my_cards) {
    return{
        type: SET_CARDS_COUNT,
        users, my_cards
    }
}
export function addUserDomino(domino) {
    return{
        type: ADD_DOMINO_COUNT,
        domino
    }
}
export function removeUserDomino(domino) {
    return{
        type: REMOVE_DOMINO_COUNT,
        domino
    }
}