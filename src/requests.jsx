import {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import GetCookies from "./hooks/GetCookies";
import {setUserInfo} from "./redux/reducers/userInfoReducer";
import {actionLogout} from "./redux/actions";
import {setGamesList} from "./redux/reducers/gamesListReducer";
import {logDOM} from "@testing-library/react";
import GlobalLink from "./GlobalLink";

const Requests = () => {

    const dispatch = useDispatch()
    const [isError, setIsError] = useState(false)
    // const [games, setGames] = useState([])

    useEffect(() => {

        axios.get(GlobalLink('/api/game/list/')).then(res => {
            console.log(res.data)
            dispatch(setGamesList(res.data))
        })

    }, [])



    // AUTH
    useEffect(() => {

        if(GetCookies('access_token')){

            try{
                axios.defaults.headers.get['Authorization'] = `Bearer ${GetCookies('access_token')}`;
                axios.get(GlobalLink('/api/user/me/')).then(res => {
                    dispatch(setUserInfo(res.data))
                    dispatch(actionLogout(prev => !prev))
                }).catch(er => {

                    if(!isError) {
                        axios.defaults.headers.post['Authorization'] = `Bearer ${GetCookies('refresh_token')}`;
                        axios.post(GlobalLink('/api/auth/refresh/')).then(res => {
                            document.cookie = `access_token=${res.data.access_token}`;
                            document.cookie = `refresh_token=${res.data.refresh_token}`;

                            axios.defaults.headers.get['Authorization'] = `Bearer ${res.data.access_token}`;
                            axios.get(GlobalLink('/api/user/me/')).then(res => {
                                dispatch(setUserInfo(res.data))
                                dispatch(actionLogout(prev => !prev))
                            })

                        })
                        setIsError(true)
                    }
                })
            } catch (er) {
                console.log('error', er)
            }
        }
    }, [isError])
    // AUTH

};

export default Requests;