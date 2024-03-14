import React, {createContext, useEffect, useState} from 'react'
import './assets/scss/style.css'
// import './assets/js/libs.min.js'
// import './assets/js/main.js'
import {Header} from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import bodyBgd from "./assets/img/body-bg.jpg"
import {useRouters} from "./hooks/Routers";
import {Footer} from "./components/footer/Footer";
import {Notifications} from "./components/notifications/Notifications";
import {Popups} from "./components/popup/Popups";
import {GetUser} from './api/GetUser';
import {useDispatch} from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IAppProps {

}

interface IRoutes {
    [key: string]: {
        title: string
        element: any
    }
}

export const PopupContext: any = createContext(null)

export const App: React.FC<IAppProps> = () => {

    const dispatch = useDispatch()

    const init = () => {
        AOS.init();
    }

    // APIs
    GetUser(dispatch)

    useEffect(init, []);

    const routes: IRoutes = useRouters()
    const [modal, setModal] = useState("")

    return (
        <PopupContext.Provider value={setModal}>
            <div className={"wrapper"}>
                <div className="wrapper-bg _webp-true" style={{backgroundImage: `url(${bodyBgd})`, display: "block"}}
                     data-aos="fade-in" data-aos-delay="200"/>

                <Header/>

                <Routes>
                    {
                        Object.keys(routes).map((item) => <Route key={item} element={routes[item].element}
                                                                 path={item}/>)
                    }
                </Routes>

                <Footer/>

                <Popups modal={modal}/>

            </div>

            <Notifications/>
        </PopupContext.Provider>
    )
}
