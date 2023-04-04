import React from 'react';
import AccountAside from "../../components/components_account/AccountAside";
import AccountTop from "../../components/components_account/AccountTop";
import WithdrawalsInner from "../../components/components_account/WithdrawalsInner";

const AccountWithdrawals = () => {
    return (
        <main className="main">
            <section className="account">
                <div className="account__container container _large">
                    <AccountAside/>
                    <div className="account__main" data-aos="fade-in" data-aos-delay="400">
                        <AccountTop text={{current_page: "Вывод средств", previous_page: "Личный кабинет"}}/>
                        <WithdrawalsInner />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AccountWithdrawals;