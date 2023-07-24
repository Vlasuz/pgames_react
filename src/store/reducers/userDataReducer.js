import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    userData: {}
}

export const setUserData = createAction('SET_USERDATA')
export const removeUserData = createAction('REMOVE_USERDATA')

export default createReducer(initialState, {
    [setUserData]: (state, action) => {
        state.userData = action.payload
    },
    [removeUserData]: (state) => {
        state.userData = {}
    },
})