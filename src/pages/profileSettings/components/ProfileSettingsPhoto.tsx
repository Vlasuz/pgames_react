import React, {useEffect, useRef, useState} from 'react'
import {getApiLink} from "../../../functions/getApiLink";
import photoPlaceholder from "../../../assets/img/placeholder.jpg";
import {useDispatch, useSelector} from "react-redux";
import {IUser} from "../../../models";
import {getBearer} from "../../../functions/getBearer";
import axios from "axios";
import {setUser} from "../../../storage/toolkit";

interface IProfileSettingsPhotoProps {

}

export const ProfileSettingsPhoto: React.FC<IProfileSettingsPhotoProps> = () => {

    const dispatch = useDispatch()

    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const [newPhoto, setNewPhoto] = useState('')

    const handleLoadPhoto = (e: any) => {
        const preview = document.querySelector('img');
        const file = e.target.closest('label').querySelector('input').files[0];
        const reader = new FileReader();

        reader.onloadend = function () {
            // @ts-ignore
            setNewPhoto(reader.result)
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            // @ts-ignore
            preview.src = "";
        }
    }

    const inputRef: any = useRef(null)

    const handleChangePhoto = () => {
        const formData = new FormData();
        const imagefile = inputRef.current
        // @ts-ignore
        formData.append("image", imagefile.files[0]);


        getBearer("post")
        axios.post(getApiLink("/api/user/avatar/"), formData).then(({data}) => {
            dispatch(setUser(data))
            setNewPhoto('')
        })
    }

    return (
        <div className="account__col _min">
            <div className="account__block" data-aos="fade-in" data-aos-delay="500"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <div className="account-settings-element">
                        <h3 className="account-settings-element__title">
                            Фото
                        </h3>
                        <form action="#" className="account-settings-element__avatar">
                            <div className="account-settings-element__avatar--body">
                                <label htmlFor={"inputBlock"} className="account-settings-element__avatar--label">
                                    {/*<img src={photoPlaceholder} width="116"*/}
                                    {/*     height="116"*/}
                                    {/*     alt=""*/}
                                    {/*     className="account-settings-element__avatar--img"/>*/}
                                    {/*<input required type="file" name="avatar"*/}
                                    {/*       className="account-settings-element__avatar--input"/>*/}

                                    <img
                                        src={newPhoto !== "" ? newPhoto : user.avatar ? getApiLink('/' + user.avatar) : photoPlaceholder}
                                        width="116"
                                        height="116"
                                        alt=""
                                        className="account-settings-element__avatar--img"/>
                                    <input onChange={handleLoadPhoto}
                                           accept="image/png, image/gif, image/jpeg" required
                                           type="file" name="avatar"
                                           ref={inputRef}
                                           id={"inputBlock"}
                                           className="account-settings-element__avatar--input"/>
                                </label>
                                {
                                    !newPhoto.length ?
                                        <label htmlFor={"inputBlock"}
                                               className={"account-settings-element__avatar--add btn _dark _large-2"}>
                                            Добавить
                                        </label> :
                                        <div
                                            className={"account-settings-element__avatar--add btn _accent _large-2"}
                                            onClick={handleChangePhoto}>
                                            Сохранить
                                        </div>
                                }
                            </div>
                            <div className="account-settings-element__avatar--text">
                                Ваше фото будут видеть все игроки во время игры
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
