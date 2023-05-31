import {
    SET_FEN_TABLE,
    SET_FEN_LINE,
    SET_FEN_CHECKERS,
    SET_KING_CHECKERS,
    SET_SELECT_DOMINOES,
    SET_DOMINO
} from "../types";

// rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
const initialState = {
    fenTable: ''
}

export const reducerFenTable = (state = initialState, action) => {

    switch (action.type) {
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

            let newArray = state.fenTable;
            const newIndex = {
                owner: action?.fenFrom?.owner,
                is_king: action?.fenFrom?.is_king,
                position: action?.fenTo
            }

            newArray = [...newArray.slice(0, action.elemIndex), newIndex, ...newArray.slice(action.elemIndex)]

            return {
                ...state,
                fenTable: newArray.filter(item => {
                    if (item.position === action?.fenFrom.position || item.position === +action.deleteItem) {
                        return null;
                    } else {
                        return item;
                    }
                })
            }
        case SET_KING_CHECKERS:
            return {
                ...state,
                fenTable: state.fenTable.filter(item => {
                    if (item.owner === 'white' && item.position > 28) {
                        item.is_king = true;
                        return item;
                    } else if (item.owner === 'black' && item.position < 5) {
                        item.is_king = true;
                        return item;
                    } else {
                        return item;
                    }
                })
            }
        case SET_SELECT_DOMINOES:
            return {
                ...state,
                fenTable: state.fenTable,
                selectArray: [action.left, action.right]
            }
        case SET_DOMINO:
            return {
                ...state,
                fenTable: action.position ? [action.domino, ...state.fenTable] : [...state.fenTable, action.domino],
                selectArray: []
            }
        default:
            return state
    }
}

export function setFenTable(fenTable) {
    return {
        type: SET_FEN_TABLE,
        fenTable
    }
}

export function setFenLine(fenLine) {
    return {
        type: SET_FEN_LINE,
        fenLine
    }
}

export function changeFenCheckers(elemIndex, fenFrom, fenTo, deleteItem) {
    return {
        type: SET_FEN_CHECKERS,
        fenFrom, fenTo, elemIndex, deleteItem
    }
}

export function isKingCheckers(isKing) {
    return {
        type: SET_KING_CHECKERS,
        isKing
    }
}

export function setSelectDominoes(left, right) {
    return {
        type: SET_SELECT_DOMINOES,
        left, right
    }
}

export function setDomino(domino, position) {
    return {
        type: SET_DOMINO,
        domino, position
    }
}
