import React from 'react';
import './style.scss';
import DecorRight from "./components/DecorRight";
import Background from "./components/Background";
import DecorLeft from "./components/DecorLeft";
import Form from "./components/Form";

const Feedback = () => {
    return (
        <section className="feedback section-padding">
            <Background/>
            <div className="feedback__container container">
                <DecorLeft/>
                <Form/>
                <DecorRight/>
            </div>
        </section>
    );
};

export default Feedback;