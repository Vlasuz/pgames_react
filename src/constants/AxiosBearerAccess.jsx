import React from 'react';
import axios from "axios";
import getCookies from "../features/getCookies";

const AxiosBearerAccess = (method) => {
    return axios.defaults.headers[method]['Authorization'] = `Bearer ${JSON.parse(!!getCookies('access_token') && getCookies('access_token'))}`;
};

export default AxiosBearerAccess;