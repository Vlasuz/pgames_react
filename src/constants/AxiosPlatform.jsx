import React from 'react';
import axios from "axios";

const AxiosPlatform = (method) => {
    return axios.defaults.headers[method]['platform'] = `pc`;
};

export default AxiosPlatform;