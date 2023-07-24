import React from 'react';
import bodyBgd from "../assets/img/body-bg.jpg";

const Background = () => {
    return (
        <>
            <div className="wrapper-bg _webp-true" data-aos-delay="200"
                 style={{backgroundImage: `url(${bodyBgd})`}}></div>
            <div className="wrapper-bg _webp-false" data-aos-delay="200"
                 style={{backgroundImage: `url(${bodyBgd})`}}></div>
        </>
    );
};

export default Background;