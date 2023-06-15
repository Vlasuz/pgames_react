import {SET_GAME_PLAYERS, LEAVE_GAME_PLAYERS} from "../types";

const initialState = {
    players: [],
}

export const gamesListPlayersReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_GAME_PLAYERS:
            console.log('ss',action.players)
            return{
                ...state,
                players: action.players === 'clear' ? [] : [...state.players, ...action.players]
            }
        case LEAVE_GAME_PLAYERS:

            const indexPlayerArr = state.players.map(item => item.id).indexOf(action.player.id)

            return{
                ...state,
                players: [...state.players.slice(0, indexPlayerArr), ...state.players.slice(indexPlayerArr - 1)]
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
export function leaveGamePlayers(player) {
    return{
        type: LEAVE_GAME_PLAYERS,
        player
    }
}