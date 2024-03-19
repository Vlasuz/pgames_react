import React, {useEffect} from 'react'
import axios from "axios";
import {getApiLink} from "../functions/getApiLink";
import {getBearer} from "../functions/getBearer";
import {getPlatform} from "../functions/getPlatform";
import {IUser} from "../models";
import {setContacts, setUser} from "../storage/toolkit";

export const GetContacts = async (dispatch: any) => {

    getBearer("get")
    getPlatform("get")
    await axios.get<IUser>(getApiLink(`/api/landing/contacts/`)).then(({data}) => {
        dispatch(setContacts(data))
    }).catch(er => console.log(er))
}
