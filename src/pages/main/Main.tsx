import React, {useEffect} from 'react'
import { Banner } from './components/Banner';
import {MainStyled} from "./Main.styled";
import {Games} from "./components/Games";
import {Rooms} from "./components/Rooms";
import {Advantages} from "./components/Advantages";
import {Video} from "./components/Video";
import {News} from "./components/News";
import {Feedback} from "./components/feedback/Feedback";

interface IMainProps {

}

export const Main: React.FC<IMainProps> = () => {

    return (
        <MainStyled className={"main"}>
            <Banner/>
            <Games/>
            <Rooms/>
            <Advantages/>
            <Video/>
            <News/>
            <Feedback/>
        </MainStyled>
)
}
