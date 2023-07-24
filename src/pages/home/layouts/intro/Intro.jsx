import React from 'react';
import "./style.scss";
import Slider from "./components/Slider";
import Background from "./components/Background";

const Intro = () => {
    return (
        <section className="intro">
            <Background/>
            <div className="intro__container container">
                <Slider/>
            </div>
        </section>
    );
};

export default Intro;