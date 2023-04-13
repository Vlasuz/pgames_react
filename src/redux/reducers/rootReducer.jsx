import { combineReducers } from "redux";
import { logoutReducer } from "./logoutReducer";
import { accountInformationReducer } from "./accountInformationReducer";
import {accountPhotoReducer} from "./accountPhotoReducer";
import {addRoomReducer} from "./addRoomReducer";
import {GamesSearchReducer} from "./gamesSearchReducer";
import {newsListReducer} from "./newsListReducer";
import {gamesListReducer, GamesListReducer} from "./gamesListReducer";
import {GamesCatalogListReducer} from "./gamesCatalogListReducer";
import {accountBalanceReducer} from "./accountBalanceReducer";
import {cardsListReducer} from "./cardsListReducer";
import {cardsListDealingReducer} from "./cardsListDealingReducer";
import {gameResultReducer} from "./gameResultReducer";
import {cardsListLftReducer} from "./cardsListLftReducer";
import {cardsListRhtReducer} from "./cardsListRhtReducer";
import {cardsForPlayer1Reducer} from "../redux_poker/reducers_poker/poker_players/pokerPlayer_1";
import {allCardsReducer} from "../redux_poker/reducers_poker/allCardsReducer";
import {cardsForPlayerMeReducer} from "../redux_poker/reducers_poker/poker_players/pokerPlayer_me";
import {potReducer} from "../redux_poker/reducers_poker/GamePotReducer";
import {cardsForPlayer2Reducer} from "../redux_poker/reducers_poker/poker_players/pokerPlayer_2";
import {myStepReducer} from "../redux_poker/reducers_poker/GameMyStepReducer";
import {userInfoReducer} from "./userInfoReducer";
import {gamesListPlayersReducer} from "./gamesListPlayersReducer";

export const rootReducer = combineReducers({
    logoutReducer,
    accountInformationReducer,
    accountPhotoReducer,
    addRoomReducer,
    newsListReducer,
    GamesSearchReducer,
    gamesListReducer,
    GamesCatalogListReducer,
    accountBalanceReducer,
    cardsListReducer,
    cardsListDealingReducer,
    gameResultReducer,
    cardsListLftReducer,
    cardsListRhtReducer,

    cardsForPlayer1Reducer,
    cardsForPlayer2Reducer,
    allCardsReducer,
    cardsForPlayerMeReducer,
    potReducer,
    myStepReducer,

    userInfoReducer,

    gamesListPlayersReducer,
})