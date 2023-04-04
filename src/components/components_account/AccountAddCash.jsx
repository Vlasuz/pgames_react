import React from 'react';
import FormsToAddBalance from "./FormsToAddBalance";

const AccountAddCash = () => {

    return (
        <div className="account__block--body">
            <div className="account-balance">
                <h3 className="account-balance__title account-min-title">
                    Пополнить баланс
                </h3>
                <div className="account-balance__main">
                    <FormsToAddBalance />
                </div>
            </div>
        </div>
    );
};

export default AccountAddCash;