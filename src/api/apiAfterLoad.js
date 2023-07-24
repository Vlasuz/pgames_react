import axios from "axios";
import ApiLink from "../constants/ApiLink";
import {setUserData} from "../store/reducers/userDataReducer";
import AxiosBearerAccess from "../constants/AxiosBearerAccess";
import getCookies from "../features/getCookies";

export default function apiAfterLoad(dispatch) {

    AxiosBearerAccess('get')
    !!getCookies('access_token') && axios.get(ApiLink(`api/user/me/`)).then(res => {
        dispatch(setUserData(res.data))
    })

}