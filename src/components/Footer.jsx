import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import FooterCopyright from "./components_footer/FooterCopyright";
import FooterHot from "./components_footer/FooterHot";
import FooterNavigation from "./components_footer/FooterNavigation";
import FooterInfo from "./components_footer/FooterInfo";

const Footer = () => {

    return (
        <footer className="footer" data-aos="fade-in" data-aos-anchor=".main">
            <div className="footer__bg">
                <picture>
                    <source srcSet="images/footer/bg.webp" type="image/webp"/>
                    <img src="images/footer/bg.png" loading="lazy" alt="" width="0" height="0"
                         className="footer__bg--img"/>
                </picture>
            </div>
            <div className="footer__container container _large">
                <FooterInfo/>
                <FooterNavigation/>
                {/*<FooterHot/>*/}
                <FooterCopyright/>
            </div>
        </footer>
    );
};

export default Footer;