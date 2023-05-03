import React, {useEffect} from 'react';
import './assets/styles.css';
import JsAos from "./components/JS_Aos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import testWebP from "./components/JS_WebP";
import Routers from "./pages/Routers";
import {BrowserRouter, HashRouter} from "react-router-dom";
import Popups from "./components/components_popups/Popups";
import {useTranslation} from "react-i18next";
import Notifications from "./components/Notifications";
import JsScroll from "./components/JS_Scroll";
import requests from "./requests";
import GetCookies from "./hooks/GetCookies";

const App = (props) => {

    useEffect(() => {
        JsAos()
        JsScroll()
        testWebP(document.body)
    })
    const {t} = useTranslation();

    requests();

    return (
        <HashRouter>
            <div className="wrapper-bg _webp-true" data-aos="fade-in" data-aos-delay="200" style={{backgroundImage: "url(images/body-bg.webp)"}}/>
            <div className="wrapper-bg _webp-false" data-aos="fade-in" data-aos-delay="200" style={{backgroundImage: "url(images/body-bg.jpg)"}}/>
            <Header />

            <Routers />

            <Footer/>
            <Popups/>
            <Notifications />

        </HashRouter>
    );
};

export default App;