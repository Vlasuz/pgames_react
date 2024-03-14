import React, {useEffect} from 'react'
import feedbackBgd from '../../../../assets/img/main-page/feedback/bg.png'
import decor12 from '../../../../assets/img/main-page/feedback/image-1-2.png'
import decor11 from '../../../../assets/img/main-page/feedback/image-1-1.png'
import decor21 from '../../../../assets/img/main-page/feedback/image-2-1.png'
import decor22 from '../../../../assets/img/main-page/feedback/image-2-2.png'
import decor23 from '../../../../assets/img/main-page/feedback/image-2-3.png'
import {FeedbackForm} from "./components/FeedbackForm";

interface IFeedbackProps {

}

export const Feedback: React.FC<IFeedbackProps> = () => {

    return (
        <section className="feedback section-padding">
            <div className="feedback__bg">
                <picture>
                    <img src={feedbackBgd} loading="lazy" alt="" width="0" height="0"
                         className="feedback__bg--img"/>
                </picture>
            </div>
            <div className="feedback__container container">
                <div className="feedback__decor hide-on-table" data-aos="fade-in" data-aos-delay="700">
                    <div className="feedback__decor--body">
                        <div className="feedback__decor--item _levitation"
                             style={{left: 0, top: 0, width: "70%", animationDuration: "6s"}}>
                            <picture className="hide-on-table">
                                <img src={decor12} loading="lazy" alt=""
                                     width="200" height="335" className="feedback__decor--img"/>
                            </picture>
                        </div>
                        <div className="feedback__decor--item _levitation" style={{left: 0, bottom: 0, width: "50%"}}>
                            <picture className="hide-on-table">
                                <img src={decor11} style={{transform: "translate(0,25%)"}} loading="lazy" alt=""
                                     width="200"
                                     height="335"
                                     className="feedback__decor--img"/>
                            </picture>
                        </div>
                    </div>

                </div>

                <FeedbackForm/>

                <div className="feedback__decor" data-aos="fade-in" data-aos-delay="700">
                    <div className="feedback__decor--body">
                        <div className="feedback__decor--item _levitation"
                             style={{right: "50%", top: 0, width: "35%", animationDuration: "4.5s"}}>
                            <picture className="hide-on-table">
                                <img src={decor21} loading="lazy" alt=""
                                     width="200" height="335" className="feedback__decor--img"/>
                            </picture>
                        </div>
                        <div className="feedback__decor--item _levitation"
                             style={{right: "5%", top: "15%", width: "55%"}}>
                            <picture className="hide-on-table">
                                <img src={decor22} style={{transform: "translate(0,25%)"}} loading="lazy" alt=""
                                     width="200" height="335" className="feedback__decor--img"/>
                            </picture>
                        </div>
                        <div className="feedback__decor--item _levitation"
                             style={{right: "40%", bottom: "-15%", width: "50%", animationDuration: "5.5s"}}>
                            <picture className="hide-on-table">
                                <img src={decor23} style={{transform: "translate(0,25%)"}} loading="lazy" alt=""
                                     width="200" height="335"
                                     className="feedback__decor--img"/>
                            </picture>
                        </div>
                        <div className="feedback__decor--item _levitation"
                             style={{right: "25%", top: "15%", width: "80px", animationDuration: "4.5s"}}>
                            <picture className="visible-on-table">
                                <img src={decor21} loading="lazy" alt=""
                                     width="200" height="335" className="feedback__decor--img"/>
                            </picture>
                        </div>
                        <div className="feedback__decor--item _levitation"
                             style={{right: "35%", top: "15%", width: "110px"}}>
                            <picture className="visible-on-table">
                                <img src={decor12} style={{transform: "translate(0,25%)"}} loading="lazy" alt=""
                                     width="200" height="335"
                                     className="feedback__decor--img"/>
                            </picture>
                        </div>
                        <div className="feedback__decor--item _levitation"
                             style={{right: "45%", bottom: "-30%", width: "100px", animationDuration: "5.5s"}}>
                            <picture className="visible-on-table">
                                <img src={decor11} style={{transform: "translate(0,25%)"}} loading="lazy" alt=""
                                     width="200" height="335"
                                     className="feedback__decor--img"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
