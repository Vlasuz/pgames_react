import React from 'react';
import AccountAside from "../../components/components_account/AccountAside";
import HistoryAddCashInner from "../../components/components_account/HistoryAddCashInner";
import AccountTop from "../../components/components_account/AccountTop";

const AccountHistory = () => {

    return (
        <main className="main">
            <section className="account">
                <div className="account__container container _large">
                    <AccountAside/>
                    <div className="account__main" data-aos="fade-in" data-aos-delay="400">
                        <AccountTop text={{current_page: "История пополнений", previous_page: "Личный кабинет" }} />
                        <HistoryAddCashInner/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AccountHistory;