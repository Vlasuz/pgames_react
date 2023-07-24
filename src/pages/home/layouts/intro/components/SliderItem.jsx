import React from 'react';
import DecorLeft from "./DecorLeft";
import DecorRight from "./DecorRight";
import Logo from "../../../../../components/Logo";

const SliderItem = ({text, textButton, linkButton}) => {
    return (
        <>
            <DecorLeft/>
            <div className="intro__block" data-aos="fade-in" data-aos-delay="800">
                <div className="intro__header">
                    <div className="intro__header--logo">
                        <Logo className={"intro__header--logo"} />
                    </div>
                </div>
                <div className="intro__text">
                    <p>
                        {text}
                    </p>
                </div>
                <a href={linkButton} className="intro__btn btn _gradient _shadow">
                    {textButton}
                </a>
            </div>
            <DecorRight/>
        </>
    );
};

export default SliderItem;