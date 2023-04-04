import React from 'react';
import ReferalHistoryList from "./ReferalHistoryList";
import ReferalLink from "./ReferalLink";

const ReferalInner = () => {

    return (
        <div className="account__main--wrapper">
            <div className="account__row">
                <ReferalLink />
                <div className="account__col">
                    <div className="account__block" data-aos="fade-in" data-aos-delay="500"
                         data-aos-anchor=".account__main">
                        <div className="account__block--body _none-padding _transparent">
                            <div className="account-referal-history">
                                <h3 className="account-referal-history__title account-min-title">
                                    История реферальной системы
                                </h3>
                                <ReferalHistoryList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferalInner;