import React from 'react';

const SetCookies = (name, json) => {

    let cookieValue = '';
    let expire = '';
    let period = '';

    //Specify the cookie name and value
    if(json !== null) {
        cookieValue = name + '=' + JSON.stringify(json) + ';';
    } else {
        cookieValue = name + '=; expires=Thu, 18 Dec 2013 12:00:00 UTC;';
    }

    //Specify the path to set the cookie
    cookieValue += 'path=/ ;';

    //Specify how long you want to keep cookie
    period = 30; //days to store
    expire = new Date();
    expire.setTime(expire.getTime() + 1000 * 3600 * 24 * period);
    expire.toUTCString();
    cookieValue += 'expires=' + expire + ';';

    //Set cookie
    document.cookie = cookieValue;
};

export default SetCookies;