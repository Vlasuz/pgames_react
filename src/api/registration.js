import axios from "axios";
import AxiosPlatform from "../constants/AxiosPlatform";
import apiLink from "../constants/ApiLink";
import {setUserData} from "../store/reducers/userDataReducer";
import setCookie from "../features/setCookie";
import handleChangePopup from "../features/handleChangePopup";

export default function registration(e, dispatch, emailValue, nameValue, passwordValue, passwordRepeatValue) {

    AxiosPlatform("post")
    axios.post(apiLink(`api/auth/sign_up/?email=${emailValue}&username=${nameValue}&password=${passwordValue}&confirm_password=${passwordRepeatValue}`)).then(res => {

        dispatch(setUserData(res.data.user))
        handleChangePopup(dispatch, null)
        setCookie("access_token", JSON.stringify(res.data.access_token))
        setCookie("refresh_token", JSON.stringify(res.data.refresh_token))

    }).catch(error => {
        if(error.response.status === 409) {
            // setError('Такой аккаунт уже зарегистрирован')
        }
    })

}