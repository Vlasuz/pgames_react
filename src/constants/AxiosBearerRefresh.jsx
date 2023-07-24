import React from 'react';
import axios from "axios";
import getCookies from "../features/getCookies";

const AxiosBearerRefresh = (method) => {
    return axios.defaults.headers[method]['Authorization'] = `Bearer ${JSON.parse(!!getCookies('refresh_token') && getCookies('refresh_token'))}`;
};

export default AxiosBearerRefresh;