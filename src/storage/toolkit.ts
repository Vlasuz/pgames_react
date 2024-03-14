import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "./initialState";


const toolkit = createSlice({
    name: "toolkit",
    initialState: initialState(),
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = {};
        },

        setGames(state, action) {
          state.games = action.payload
        },

        setRooms(state, action) {
          state.rooms = action.payload
        },

        setNotification(state, action) {
            state.notification = [action.payload, ...state.notification]
        },
        removeNotification(state) {
            const olArray = state.notification
            olArray.pop();
            state.notification = olArray
        }
    },
})

export default toolkit.reducer;
export const {

    setUser,
    removeUser,

    setGames,

    setRooms,

    setNotification,
    removeNotification,

} = toolkit.actions;