import React from 'react';
import Home from "../pages/home/Home";

const Routers = () => {
    return [
        {path: '*', element: null},
        {path: '/', element: <Home/>},
    ]
};

export default Routers;