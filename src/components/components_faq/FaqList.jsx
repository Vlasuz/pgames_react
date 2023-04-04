import React, {useEffect, useState} from 'react';
import SlideUpDown from "../../hooks/SlideUpDown";
import axios from "axios";
import GlobalLink from "../../GlobalLink";

const FaqList = ({ searchQuestion }) => {

    const {slideUp, slideDown} = SlideUpDown()

    const handleOpen = (e) => {
        let faqItemQuestion = e.target.closest('.faq__item--question');
        if(faqItemQuestion) {

            const item = faqItemQuestion.closest('.faq__item'),
                answear = item.querySelector('.faq__item--answear');

            if (!item.classList.contains('_sliding')) {
                item.classList.add('_sliding')

                if (item.classList.contains('_active')) {
                    slideUp(answear, 500)
                    answear.style.display = "block";
                    item.classList.remove('_active');

                } else {
                    slideDown(answear, 500);
                    item.classList.add('_active');

                }

                setTimeout(() => {
                    item.classList.remove('_sliding')
                }, 500)

            }
        }
    }


    const [listOfQuestions, setListOfQuestions] = useState([])

    useEffect(() => {

        axios.get(GlobalLink('/api/landing/faq_list/')).then(res => {
            setListOfQuestions(res.data)
        })

    }, [])

    return (
        <ul className="faq__list">

            {
                listOfQuestions.filter(item => item.name.toLowerCase().includes(searchQuestion.toLowerCase())).map((item, index) =>
                    <li key={index} className="faq__item" data-aos="fade-up" data-aos-delay="300">
                        <div className="faq__item--question" onClick={handleOpen}>
                            {index + 1}. {item.name}
                        </div>
                        <div className="faq__item--answear">
                            {item.text}
                        </div>
                    </li>
                )
            }

        </ul>
    );
};

export default FaqList;