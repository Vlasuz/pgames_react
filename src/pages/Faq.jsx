import React, {useState} from 'react';
import FaqTop from "../components/components_faq/FaqTop";
import FaqBanner from "../components/components_faq/FaqBanner";
import FaqList from "../components/components_faq/FaqList";
import FaqVideo from "../components/components_faq/FaqVideo";
import FaqForm from "../components/components_faq/FaqForm";
import FaqFormDecoration from "../components/components_faq/FaqFormDecoration";

const Faq = () => {

    const [searchQuestion, setSearchQuestion] = useState('')

    return (
        <main className="main">
            <section className="faq page-padding-top">
                <div className="faq__container container">
                    <FaqTop setSearchQuestion={setSearchQuestion} searchQuestion={searchQuestion} />
                    <div className="faq__main">
                        <FaqBanner/>
                        <FaqList searchQuestion={searchQuestion} />
                        <FaqVideo/>
                    </div>
                </div>
            </section>
            <section className="faq-feedback" data-aos="fade-in">
                <div className="faq-feedback__container container">
                    <div className="faq-feedback__body">
                        <FaqForm/>
                        <FaqFormDecoration/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Faq;