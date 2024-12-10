import React, { Dispatch, SetStateAction, useState } from "react";
import SearchSwitch from "./common/SeacrhSwitch.tsx";
import TextInput from "./common/TextInput.tsx";
import Button from "../shared/Button.tsx";
import { SwitchEnum } from "../../types/SwitchEnum.ts";
import search_icon from '../../assets/search_icon.png'
import api from "../../api/index.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import { SET_TABLE_CARD } from "../../reducers/cards.ts";
import useNotifier from "../../hooks/useNotifier.ts";
import { NotificationStatuses } from "../../types/Notification.ts";

export default function SearchComponent(props: {setLoaderStatus: Dispatch<SetStateAction<string>>}) {

    const [currentSwitch, setSwitch] = useState<SwitchEnum>(SwitchEnum.PHONE_NUMBER_SEARCH);
    const [target, setTarget] = useState('');

    const dispatch = useAppDispatch();
    const notifier = useNotifier();

    const fetchRequest = async () => {
        if (currentSwitch === SwitchEnum.PHONE_NUMBER_SEARCH && target.length !== 11) {
            notifier.send({
                active: true,
                message: 'Неправильный номер телефона',
                status: NotificationStatuses.fail
            })
        }
        else if (currentSwitch === SwitchEnum.BONUS_CARD_NUMBER_SEARCH && target.length !== 16) {
            notifier.send({
                active: true,
                message: 'Неправильной номер бонусной карты',
                status: NotificationStatuses.fail
            })
        }
        else {
            props.setLoaderStatus('loading');
            const cards = await api.card.fetchCard({
                target: target
            });
            console.log(cards.data);
            dispatch(SET_TABLE_CARD(cards.data));
            props.setLoaderStatus('load')
        }
    }

    return(
        <div className="SearchComponent__layout">
            <div className='input_container'>
                <SearchSwitch current={currentSwitch} setSwitch={setSwitch}/>
                <div className="SearchComponent__searchField">
                <TextInput currentSeacrh={currentSwitch} setTarget={setTarget}/>
                <Button 
                    logo={search_icon}
                    onPress={() => fetchRequest()}
                />
                </div>
                {
                    /*
                    <div className="SearchComponent__actionButton">
                        Карты с цифровыми паролями
                    </div>
                    */
                }
                
            </div>
        </div>
    )
}