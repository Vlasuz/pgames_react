import axios from "axios";
import ApiLink from "../constants/ApiLink";
import setCookie from "../features/setCookie";
import {setUserData} from "../store/reducers/userDataReducer";
import AxiosPlatform from "../constants/AxiosPlatform";
import handleChangePopup from "../features/handleChangePopup";

export default function signIn(e, dispatch, {emailValue, passwordValue}) {
    e.preventDefault()

    AxiosPlatform("post")
    axios.post(ApiLink(`api/auth/sign_in/?email=${emailValue}&password=${passwordValue}`)).then(res => {

        setCookie("access_token", JSON.stringify(res.data.access_token))
        setCookie("refresh_token", JSON.stringify(res.data.refresh_token))

        dispatch(setUserData(res.data.user))
        handleChangePopup(dispatch, null)

    }).catch(error => {
        console.log('ERROR LOGIN', error)
    })

}