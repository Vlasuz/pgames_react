import React from 'react';
import Advantages from "../../../../../constants/Advantages";

const List = () => {

    return (
        <ul className="advantages__list">

            {
                Advantages().map((item, index) =>
                    <li key={index} className="advantages__item" data-aos="fade-up" data-aos-delay="400">
                        <div className="advantages__item--body">
                            <div className="advantages__item--icon">
                                <img src={item.icon} alt=""
                                     className="advantages__item--icon-img"/>
                            </div>
                            <h3 className="advantages__item--title section-title _center">
                                {item.title}
                            </h3>
                            <div className="advantages__item--text">
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </li>
                )
            }

        </ul>
    );
};

export default List;