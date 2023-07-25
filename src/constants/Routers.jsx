import React from 'react';
import Home from "../pages/home/Home";
import Games from "../pages/games/Games";
import GamesSearch from "../pages/gamesSearch/GamesSearch";

const Routers = () => {
    return [
        {path: '*', element: null},
        {path: '/', element: <Home/>},
        {path: '/games', element: <Games/>},
        {path: '/games/:value', element: <GamesSearch/>},
    ]
};

export default Routers;