import {changePopup, setPopup} from "../store/reducers/popupReducer";

export default function handleChangePopup(dispatch, popup) {
    dispatch(changePopup("HANDLE_CHANGE"))
    setTimeout(() => {
        dispatch(setPopup(popup))
        dispatch(changePopup(""))
    }, 300)
}