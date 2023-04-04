import React from 'react';
import aos from "aos";

const JsAos = () => {
    aos.init({
        // Global settings:
        duration: 700,
        once: true,
        // disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function

    });
};

export default JsAos;