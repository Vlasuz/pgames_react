import {PLAYER_MADE_MOVE} from "../types";

const initialState = {
    playerMadeMove: false
}

export const reducerPlayerMadeMove = (state = initialState, action) => {
    switch(action.type) {
        case PLAYER_MADE_MOVE:
            return {
                ...state,
                playerMadeMove: action.playerMadeMove
            }
        default: return state
    }
}

export function setPlayerMadeMove(playerMadeMove) {
    return{
        type: PLAYER_MADE_MOVE,
        playerMadeMove
    }
}