import React, {useEffect} from 'react'
import axios from "axios";
import {getApiLink} from "../functions/getApiLink";
import {getBearer} from "../functions/getBearer";
import {getPlatform} from "../functions/getPlatform";
import { useDispatch } from 'react-redux';
import {setUser} from "../storage/toolkit";
import {IUser} from "../models";

export const GetUser = async (dispatch: any) => {

    getBearer("get")
    getPlatform("get")
    await axios.get<IUser>(getApiLink(`/api/user/me/`)).then(({data}) => {
        console.log(data)
        dispatch(setUser(data))
    }).catch(er => console.log(er))
}
