import {Main} from "../pages/main/Main"
import {JSX} from "react";
import {Games} from "../pages/games/Games";
import {Rooms} from "../pages/rooms/Rooms";
import {News} from "../pages/news/News";
import {Profile} from "../pages/profile/Profile";
import {ProfileSettings} from "../pages/profileSettings/ProfileSettings";
import {ProfileHistory} from "../pages/profileHistory/ProfileHistory";
import {ProfileReferral} from "../pages/profileReferal/ProfileReferral";
import {ProfileWithdrawals} from "../pages/profileWithdrawals/ProfileWithdrawals";
import {Article} from "../pages/article/Article";
import {RoomCreate} from "../pages/roomCreate/RoomCreate";
import {GamesSingle} from "../pages/gamesSingle/GamesSingle";
import {Poker} from "../pagesGames/poker/Poker";
import {Fool} from "../pagesGames/fool/Fool";

interface IRoutes {
    [key: string]: {
        title: string;
        isHeader: boolean
        element: JSX.Element;
    };
}

export const useRouters = (): IRoutes => {
    return {
        "/": {
            title: "Главная",
            isHeader: true,
            element: <Main/>
        },
        "/games": {
            title: "Игры",
            isHeader: true,
            element: <Games/>
        },
        "/games/:gameSlug": {
            title: "Игры",
            isHeader: false,
            element: <GamesSingle/>
        },
        "/rooms": {
            title: "Комнаты",
            isHeader: true,
            element: <Rooms/>
        },
        "/rooms/create": {
            title: "Комнаты",
            isHeader: false,
            element: <RoomCreate/>
        },
        "/news": {
            title: "Новости",
            isHeader: true,
            element: <News/>
        },
        "/news/:newsId": {
            title: "Новости",
            isHeader: false,
            element: <Article/>
        },
        "/profile": {
            title: "Профиль",
            isHeader: false,
            element: <Profile/>
        },
        "/profile-settings": {
            title: "Профиль",
            isHeader: false,
            element: <ProfileSettings/>
        },
        "/profile-history": {
            title: "Профиль",
            isHeader: false,
            element: <ProfileHistory/>
        },
        "/profile-referral": {
            title: "Профиль",
            isHeader: false,
            element: <ProfileReferral/>
        },
        "/profile-withdrawals": {
            title: "",
            isHeader: false,
            element: <ProfileWithdrawals/>
        },

        "/poker/:roomId": {
            title: "",
            isHeader: false,
            element: <Poker/>
        },
        "/fool/:roomId": {
            title: "",
            isHeader: false,
            element: <Fool/>
        },
    }
}