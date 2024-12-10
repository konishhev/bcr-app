import React, {ChangeEvent, useEffect, useState} from "react";
import api from "../api/index.ts";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {getAuthToken, INIT_AUTH_TOKEN, REMOVE_AUTH_TOKEN, SET_AUTH_TOKEN} from "../reducers/auth.ts";
import logo from '../assets/logo.png';
import {useNavigate} from "react-router-dom";
import useNotifier from "../hooks/useNotifier.ts";
import {NotificationStatuses} from "../types/Notification.ts";
import md5 from 'md5';
import Notification from "../components/shared/Notification.tsx";

export default function LoginRoute() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [isPasswordHidden, setPasswordHidden] = useState(true);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const notifier = useNotifier();

    console.log(localStorage)
    console.log(useAppSelector(getAuthToken))

    useEffect(() => {
        dispatch(REMOVE_AUTH_TOKEN())
        dispatch(INIT_AUTH_TOKEN())
        api.auth.verify().then(() => navigate('/'))
        .catch(error => console.log(error));
    }, [])

    const logIn = (login: string, password: string) => {
        api.auth.login({username: login, password: md5(password)})
        .then(response => {
            dispatch(SET_AUTH_TOKEN(response.data.access_token));
            navigate('/')
        })
        .catch(() => notifier.send({
            active: true,
            message: 'Отказано в доступе',
            status: NotificationStatuses.fail
        }))
    }

    return(
        <div className="LoginRoute__layout">
            <div style={{marginBottom: '10%'}}>
                <img src={logo} className="LoginRoute__logo"/>
                <div style={{marginTop: 10}}>
                    <textarea
                        className="textarea"
                        placeholder='Логин'
                        maxLength={20}
                        value={login}
                        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setLogin(event.target.value)}
                    ></textarea>
                </div>
                <div style={{marginTop: 10}}>
                    <input
                        type={isPasswordHidden ? 'password' : 'none'}
                        className="textarea"
                        placeholder='Пароль'
                        maxLength={20}
                        value={password}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    ></input>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
                        <input className="LoginRoute__checkbox" type="checkbox" onChange={() => setPasswordHidden(!isPasswordHidden)}/> Показать пароль
                    </div>
                    <div className="LoginRoute__button" onClick={() => logIn(login, password)}> Войти </div>
                </div>
            </div>
            <div className='Notification__position'>
                <Notification {...notifier.getNotification()}/>
            </div>
        </div>
    )
}