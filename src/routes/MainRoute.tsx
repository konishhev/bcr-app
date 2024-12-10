import React, {useEffect, useLayoutEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import ICard from "../types/ICard.ts";
import useNotifier from "../hooks/useNotifier.ts";
import {getCardTable} from "../reducers/cards.ts";
import SearchComponent from "../components/Seacrh/SearchComponent.tsx";
import CardTableComponent from "../components/CardTable/CardTableComponent.tsx";
import CardInfoComponent from "../components/CardInfo/CardInfoComponent.tsx";
import Notification from "../components/shared/Notification.tsx";
import store from "../reducers/store.ts";
import {useNavigate} from "react-router-dom";
import api from "../api/index.ts";
import {INIT_AUTH_TOKEN} from "../reducers/auth.ts";
import Loader from "../components/shared/Loader.tsx";

export default function MainRoute() {
    
    const [currentTable, setCurrentTable] = useState<Array<ICard>>(useAppSelector(getCardTable));

    //const [historyTable, setHistoryTable] = useState<Array<ICard>>(useAppSelector(getHistoryTable));

    const [currentCard, setCurrentCard] = useState<ICard>(useAppSelector(getCardTable)[0]);

    const [loaderStatus, setLoaderStatus] = useState('init');

    const notifier = useNotifier();

    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(INIT_AUTH_TOKEN());
        api.auth.verify().catch(() => navigate('/login'));
    }, [])

    useEffect(() => {
        store.subscribe(() => {
            setCurrentCard(store.getState().cards.tableCard[0]);
            setCurrentTable(store.getState().cards.tableCard);
        })
    }, [])

    const cardInfo = () => {
        return(
            <div>
                <div className="title">
                    Информация по карте
                </div>
                <CardInfoComponent {...currentCard}/>
            </div>
        )
    }

    return (
        <div className='main'>
            <div className='App_leftSide'>
                <div className='title'>
                    Поиск бонусной карты
                </div>
                <SearchComponent setLoaderStatus={setLoaderStatus}/>
                <div style={{height: '200px'}}>
                    {currentTable.length > 0 ? <CardTableComponent type='found' table={currentTable} currentCard={currentCard} callback={setCurrentCard}/> : undefined}
                </div>
                {/*
                <div style={{height: '300px', marginTop: '100px'}}>
                    <CardTableComponent type='history' table={historyTable} currentCard={currentCard} callback={setCurrentCard}/>
                </div>
                */}
            </div>
            <div>
                {currentTable.length > 0 && loaderStatus !== 'loading' ? cardInfo() : <Loader status={loaderStatus}/>}
            </div>
            <div className='Notification__position'>
                <Notification {...notifier.getNotification()}/>
            </div>
    </div>
  );
}