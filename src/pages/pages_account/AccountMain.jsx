import React from 'react';
import AccountAside from "../../components/components_account/AccountAside";
import MainInner from "../../components/components_account/MainInner";
import AccountTop from "../../components/components_account/AccountTop";

const AccountMain = () => {
    return (
        <main className="main">
            <section className="account">
                <div className="account__container container _large">
                    <AccountAside/>
                    <div className="account__main" data-aos="fade-in" data-aos-delay="400">
                        <AccountTop text={{current_page: "Личный кабинет", previous_page: ""}} />
                        <MainInner />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AccountMain;