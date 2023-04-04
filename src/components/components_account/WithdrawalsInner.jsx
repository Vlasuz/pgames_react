import React, {useEffect} from 'react';
import JsCustomSelect from "../JS_CustomSelect";
import WithdrawalsForm from "./WithdrawalsForm";
import WithdrawalsHistory from "./WithdrawalsHistory";

const WithdrawalsInner = () => {

    return (
        <div className="account__main--wrapper">
            <div className="account__row">
                <WithdrawalsForm/>
                <div className="account__col">
                    <div className="account__block" data-aos="fade-in" data-aos-delay="500"
                         data-aos-anchor=".account__main">
                        <div className="account__block--body _none-padding _transparent">
                            <WithdrawalsHistory />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithdrawalsInner;