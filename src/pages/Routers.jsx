import React from 'react';
import Main from "./Main";
import {Routes, Route} from "react-router-dom";
import Games from "./Games";
import Rooms from "./Rooms";
import News from "./News";
import RoomCreate from "./RoomCreate";
import AccountMain from "./pages_account/AccountMain";
import AccountSettings from "./pages_account/AccountSettings";
import AccountReferal from "./pages_account/AccountReferal";
import AccountHistory from "./pages_account/AccountHistory";
import AccountWithdrawals from "./pages_account/AccountWithdrawals";
import Error404 from "./Error404";
import NewsSingle from "./NewsSingle";
import GamesSingle from "./GamesSingle";
import ScrollToTop from "../hooks/ScrollToTop";
import RoomSingleFool from "./RoomSingleFool";
import GamesSearch from "./GamesSearch";
import Faq from "./Faq";
import TextPage from "./TextPage";
import RoomSingleChess from "./RoomSingleChess";
import RoomSingleCheckers from "./RoomSingleCheckers";
import RoomSingleDominoes from "./RoomSingleDominoes";

const Routers = () => {
    ScrollToTop()

    const routers = [
        {path: "*", comp: <Error404/>},
        {path: "/", comp: <Main/>},

        {path: "/rooms", comp: <Rooms/>},
        {path: "/create-room", comp: <RoomCreate/>},
        {path: "/rooms/fool/:roomId", comp: <RoomSingleFool/>},
        {path: "/rooms/chess/:roomId", comp: <RoomSingleChess/>},
        {path: "/rooms/checkers/:roomId", comp: <RoomSingleCheckers/>},
        {path: "/rooms/dominoes/:roomId", comp: <RoomSingleDominoes/>},
        {path: "/rooms/dominoes", comp: <RoomSingleDominoes/>},

        {path: "/games", comp: <Games/>},
        {path: "/games/:gamesId", comp: <GamesSingle/>},
        {path: "/games-search", comp: <GamesSearch/>},

        {path: "/news", comp: <News/>},
        {path: "/news/:newsId", comp: <NewsSingle/>},

        {path: "/account-main", comp: <AccountMain/>},
        {path: "/account-settings", comp: <AccountSettings/>},
        {path: "/account-history", comp: <AccountHistory/>},
        {path: "/account-referal", comp: <AccountReferal/>},
        {path: "/account-withdrawals", comp: <AccountWithdrawals/>},

        {path: "/faq", comp: <Faq/>},
        {path: "/text-page", comp: <TextPage/>},
    ]

    return (

        <Routes>
            {
                routers.map((elem, key) =>
                    <Route key={key} path={elem.path} element={elem.comp}/>
                )
            }
        </Routes>
    );
};

export default Routers;