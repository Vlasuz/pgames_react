import React, {useEffect} from "react";
import Routers from "./constants/Routers";
import {Route, Routes} from 'react-router-dom';
import {useDispatch} from "react-redux";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

import Background from "./components/Background";
import handleScroll from "./features/handleScroll";
import ParallaxJs from "./features/parallaxJs";
import Popups from "./layouts/popups/Popups";
import apiAfterLoad from "./api/apiAfterLoad";
import getHeights from "./features/getHeights";

function App() {

    const dispatch = useDispatch()

    // AOS Init
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    // AOS Init


    // Launch scripts
    useEffect(() => {
        handleScroll()
        ParallaxJs()
        apiAfterLoad(dispatch)
        getHeights()
    }, [])
    // Launch scripts

    return (
        <div className={'wrapper'}>
            <Background/>

            <Header/>

            <div className="main">
                <Routes>
                    {Routers().map(route => <Route key={route.path} path={route.path} element={route.element}/>)}
                </Routes>
            </div>

            <Popups/>
            <Footer/>

        </div>
    );
}

export default App;
