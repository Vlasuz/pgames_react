import axios from "axios";

export const getPlatform = (type: string) => {
    const types: any = {
        'get': axios.defaults.headers.get['platform'] = `pc`,
        'post': axios.defaults.headers.post['platform'] = `pc`,
        'delete': axios.defaults.headers.delete['platform'] = `pc`,
        'put': axios.defaults.headers.put['platform'] = `pc`,
        'patch': axios.defaults.headers.patch['platform'] = `pc`
    };

    return types[type];
}