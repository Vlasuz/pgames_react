import getCookies from "./getCookies";

export default function isAuth(data, dataElse) {

    if(dataElse && !getCookies('access_token')) {
        return dataElse
    } else if(!!getCookies('access_token')) {
        return data
    }

}