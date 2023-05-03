import React from 'react';
import MainFeedbackFrom from "./MainFeedbackFrom";
import MainFeedbackDecorLeft from "./MainFeedbackDecorLeft";
import MainFeedbackDecorRight from "./MainFeedbackDecorRight";

const MainFeedback = () => {
    return (
        <section className="feedback section-padding">
            <div className="feedback__bg">
                <picture>
                    <source srcSet="images/main-page/feedback/bg.webp" type="image/webp"/>
                    <img src="images/main-page/feedback/bg.png" loading="lazy" alt="" width="0" height="0"
                         className="feedback__bg--img"/>
                </picture>
            </div>
            <div className="feedback__container container">
                <MainFeedbackDecorLeft/>
                <MainFeedbackFrom/>
                <MainFeedbackDecorRight/>
            </div>
        </section>
    );
};

export default MainFeedback;