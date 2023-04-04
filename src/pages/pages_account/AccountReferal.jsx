import React from 'react';
import AccountAside from "../../components/components_account/AccountAside";
import AccountTop from "../../components/components_account/AccountTop";
import ReferalInner from "../../components/components_account/ReferalInner";
import ClipboardJS from "clipboard";

const AccountReferal = () => {

    new ClipboardJS('.copy-btn');

    return (
        <main className="main">
            <section className="account">
                <div className="account__container container _large">
                    <AccountAside/>
                    <div className="account__main" data-aos="fade-in" data-aos-delay="400">
                        <AccountTop text={{current_page: "Реферальная система", previous_page: "Личный кабинет"}}/>
                        <ReferalInner/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AccountReferal;