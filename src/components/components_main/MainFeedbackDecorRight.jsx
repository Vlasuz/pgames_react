import React from 'react';

const MainFeedbackDecorRight = () => {
    return (
        <div className="feedback__decor" data-aos="fade-in" data-aos-delay="700">
            <div className="feedback__decor--body">
                <div className="feedback__decor--item _levitation"
                     style={{right: "50%", top: 0, width: "35%", animationDuration: "4.5s"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/feedback/image-2-1.webp" type="image/webp"/>
                        <img src="images/main-page/feedback/image-2-1.png" loading="lazy" alt=""
                             width="200" height="335" className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation" style={{right: "5%", top: "15%", width: "55%"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/feedback/image-2-2.webp" type="image/webp"/>
                        <img src="images/main-page/feedback/image-2-2.png" loading="lazy"
                             style={{transform: "translate(0,25%)"}} alt="" width="200" height="335"
                             className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation"
                     style={{right: "40%", bottom: "-15%", width: "50%", animationDuration: "5.5s"}}>
                    <picture className="hide-on-table">
                        <source srcSet="images/main-page/feedback/image-2-3.webp" type="image/webp"/>
                        <img src="images/main-page/feedback/image-2-3.png" loading="lazy"
                             style={{transform: "translate(0,25%)"}} alt="" width="200" height="335"
                             className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation"
                     style={{right: "25%", top: "15%", width: "80px", animationDuration: "4.5s"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/feedback/image-2-1.webp" type="image/webp"/>
                        <img src="images/main-page/feedback/image-2-1.png" loading="lazy" alt=""
                             width="200" height="335" className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation"
                     style={{right: "35%", top: "15%", width: "110px"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/feedback/image-1-2.webp" type="image/webp"/>
                        <img src="images/main-page/feedback/image-1-2.png" loading="lazy"
                             style={{transform: "translate(0,25%)"}} alt="" width="200" height="335"
                             className="feedback__decor--img"/>
                    </picture>
                </div>
                <div className="feedback__decor--item _levitation"
                     style={{right: "45%", bottom: "-30%", width: "100px", animationDuration: "5.5s"}}>
                    <picture className="visible-on-table">
                        <source srcSet="images/main-page/feedback/image-1-1.webp" type="image/webp"/>
                        <img src="images/main-page/feedback/image-1-1.png" loading="lazy"
                             style={{transform: "translate(0,25%)"}} alt="" width="200" height="335"
                             className="feedback__decor--img"/>
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default MainFeedbackDecorRight;