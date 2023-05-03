import React from 'react';
import AccountAddCash from "./AccountAddCash";
import BlockInfoAboutUser from "./blockInfoAboutUser";
import axios from "axios";
import {useDispatch} from "react-redux";
import {popupTitle} from "../../redux/actions";

const MainInner = () => {

    // const handleDelete = () => {
    //     axios.delete('https://board-games.sonisapps.com/api/user/confirm_delete_account/?delete_code=213').then(({data}) => {
    //         console.log('delete', data)
    //     })
    // }

    const dispatch = useDispatch()

    return (
        <div className="account__main--wrapper">
            <div className="account__row">
                <div className="account__col">
                    <div className="account__block" data-aos="fade-in" data-aos-delay="600"
                         data-aos-anchor=".account__main">

                        <BlockInfoAboutUser />

                        <button type="button" onClick={_ => dispatch(popupTitle(''))} className="account-remove-btn hide-on-table">
                            <svg width="10" height="13" viewBox="0 0 10 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.01786 0.970273C3.13839 0.716164 3.38616 0.555664 3.65625 0.555664H6.34375C6.61384 0.555664 6.86161 0.716164 6.98214 0.970273L7.14286 1.30566H9.28571C9.6808 1.30566 10 1.64152 10 2.05566C10 2.4698 9.6808 2.80566 9.28571 2.80566H0.714286C0.319866 2.80566 0 2.4698 0 2.05566C0 1.64152 0.319866 1.30566 0.714286 1.30566H2.85714L3.01786 0.970273ZM8.8125 11.4799C8.77679 12.0939 8.31027 12.5557 7.7433 12.5557H2.2567C1.69085 12.5557 1.22254 12.0939 1.18728 11.4799L0.694196 3.55566H9.28571L8.8125 11.4799Z"
                                    fill="#D93C44"/>
                            </svg>
                            Удалить аккаунт
                        </button>
                    </div>
                </div>
                <div className="account__col">
                    <div className="account__block" data-aos="fade-in" data-aos-delay="800"
                         data-aos-anchor=".account__main">

                        <AccountAddCash/>

                    </div>
                </div>
                <div className="account__col visible-on-table">
                    <div className="account__block" data-aos="fade-in" data-aos-delay="800"
                         data-aos-anchor=".account__main">
                        <div className="account__block--body _transparent _none-padding">
                            <button type="button" className="account-remove-btn">
                                <svg width="10" height="13" viewBox="0 0 10 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.01786 0.970273C3.13839 0.716164 3.38616 0.555664 3.65625 0.555664H6.34375C6.61384 0.555664 6.86161 0.716164 6.98214 0.970273L7.14286 1.30566H9.28571C9.6808 1.30566 10 1.64152 10 2.05566C10 2.4698 9.6808 2.80566 9.28571 2.80566H0.714286C0.319866 2.80566 0 2.4698 0 2.05566C0 1.64152 0.319866 1.30566 0.714286 1.30566H2.85714L3.01786 0.970273ZM8.8125 11.4799C8.77679 12.0939 8.31027 12.5557 7.7433 12.5557H2.2567C1.69085 12.5557 1.22254 12.0939 1.18728 11.4799L0.694196 3.55566H9.28571L8.8125 11.4799Z"
                                        fill="#D93C44"/>
                                </svg>
                                Удалить аккаунт
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInner;