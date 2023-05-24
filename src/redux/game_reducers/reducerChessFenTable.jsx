import {SET_FEN_TABLE, SET_FEN_LINE, SET_FEN_CHECKERS} from "../types";

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
        case SET_FEN_CHECKERS:
            const newArray = [...state.fenTable.slice(0, action.elemIndex), {owner: action?.fenFrom?.owner, is_king: action?.fenFrom?.is_king, position: action?.fenTo}, ...state.fenTable.slice(action.elemIndex > 0 ? action.elemIndex - 1 : action.elemIndex)].filter((item, index) => {
                if(!(item.position === action?.fenFrom.position || item.position === +action.deleteItem)) {
                    return item;
                } else {
                    return null;
                }
            })

            return {
                ...state,
                fenTable: newArray
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
export function changeFenCheckers(elemIndex, fenFrom, fenTo, deleteItem) {
    return{
        type: SET_FEN_CHECKERS,
        fenFrom, fenTo, elemIndex, deleteItem
    }
}