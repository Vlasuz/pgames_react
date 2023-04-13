import {SET_GAME_PLAYERS} from "../types";

const initialState = {
    players: [],
}

export const gamesListPlayersReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_GAME_PLAYERS:
            return{
                ...state,
                players: [...state.players, ...action.players]
            }
        default: return state
    }

}

export function setGamePlayers(players) {
    return{
        type: SET_GAME_PLAYERS,
        players
    }
}