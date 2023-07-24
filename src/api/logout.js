import AxiosPlatform from "../constants/AxiosPlatform";
import axios from "axios";
import apiLink from "../constants/ApiLink";
import setCookie from "../features/setCookie";
import {removeUserData} from "../store/reducers/userDataReducer";
import AxiosBearerRefresh from "../constants/AxiosBearerRefresh";

export default function logout(dispatch) {

    AxiosPlatform("post")
    AxiosBearerRefresh("post")
    axios.post(apiLink(`api/user/logout/`)).then(res => {
        dispatch(removeUserData())
        setCookie('access_token', '')
        setCookie('refresh_token', '')

    }).catch(error => {
        // if(error.response.status === '498') {
        //     dispatch(setUserInfo({}))
        //     document.cookie = "access_token=; expires=Thu, 18 Dec 2013 12:00:00 UTC";
        //     GetCookies('access_token')
        // }
    })

}