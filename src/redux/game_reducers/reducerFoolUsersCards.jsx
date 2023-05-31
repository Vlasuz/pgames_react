import {ADD_DOMINO_COUNT, REMOVE_DOMINO_COUNT, SET_CARDS_COUNT} from "../types";

const initialState = {
    users: []
}

export const reducerFoolUsersCards = (state = initialState, action) => {
    switch(action.type) {
        case SET_CARDS_COUNT:
            return {
                ...state,
                users: action.users
            }
        case ADD_DOMINO_COUNT:
            return {
                ...state,
                users: [...state.users, action.domino]
            }
        case REMOVE_DOMINO_COUNT:
            let indexItem = -1;
            state.users.map((item, index) => {
                if((item.first_side === +action.domino[0] && item.second_side === +action.domino[1]) || (item.first_side === +action.domino[1] && item.second_side === +action.domino[0])) {
                    return indexItem = index;
                }
            })
            const newArray = indexItem >= 0 ? [...state.users.slice(0, indexItem), ...state.users.slice(indexItem + 1)] : state.users;


            return {
                ...state,
                users: newArray
            }
        default: return state
    }
}

export function setUsersCards(users) {
    return{
        type: SET_CARDS_COUNT,
        users
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