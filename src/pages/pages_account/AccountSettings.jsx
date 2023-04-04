import React from 'react';
import AccountAside from "../../components/components_account/AccountAside";
import {NavLink} from "react-router-dom";
import AccountTop from "../../components/components_account/AccountTop";
import SettingsInner from "../../components/components_account/SettingsInner";

const AccountSettings = (props) => {
    return (
        <main className="main">
            <section className="account">
                <div className="account__container container _large">
                    <AccountAside/>
                    <div className="account__main" data-aos="fade-in" data-aos-delay="400">
                        <AccountTop text={{current_page: "Настройки", previous_page: "Личный кабинет"}}/>
                        <SettingsInner />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AccountSettings;