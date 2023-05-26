import {SET_PLAYER} from "../types";

const initialState = {
    playerTurn: ''
}

export const reducerPlayerTurn = (state = initialState, action) => {
    switch(action.type) {
        case SET_PLAYER:

            console.log('ssss', action.playerTurn)
            return {
                ...state,
                playerTurn: action.playerTurn
            }
        default: return state
    }
}

export function setPlayerTurn(playerTurn) {
    return{
        type: SET_PLAYER,
        playerTurn
    }
}