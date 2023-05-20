import {SET_FEN_TABLE, SET_FEN_LINE} from "../types";

const initialState = {
    fenTable: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
}

export const reducerFenTable = (state = initialState, action) => {
    switch(action.type) {
        case SET_FEN_TABLE:
            return {
                ...state,
                fenTable: action.fenTable
            }
        case SET_FEN_LINE:
            return {
                ...state,
                fenTable: `${action.fenLine} w KQkq - 0 1`
            }
        default: return state
    }
}

export function setFenTable(fenTable) {
    return{
        type: SET_FEN_TABLE,
        fenTable
    }
}
export function setFenLine(fenLine) {
    return{
        type: SET_FEN_LINE,
        fenLine
    }
}