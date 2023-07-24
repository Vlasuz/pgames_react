import apiLink from "../constants/ApiLink";
import avatarNone from "../assets/img/account/avatar-none.svg";

export default function checkUserAvatar(userData) {
    return userData?.avatar ? apiLink(userData?.avatar) : avatarNone
    // return apiLink(userData?.avatar) ?? avatarNone
}