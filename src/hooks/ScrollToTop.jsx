import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import JsCustomSelect from "../components/JS_CustomSelect";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        JsCustomSelect()

        // window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
