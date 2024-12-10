import React, { useEffect, useLayoutEffect, useState } from "react";
import ICard from "../../types/ICard";
import useNotifier from "../../hooks/useNotifier.ts";
import { NotificationStatuses } from "../../types/Notification.ts";
import { ICardState } from "../../types/ICardState.ts";
import { CardTypes } from "../../types/CardTypes.ts";

export default function CardInfoComponent(card: ICard) {

    const [isPasswordShown, setPasswordShown] = useState(false);

    const notifier = useNotifier();

    const AccountPassword = () => {
        return(
            <div style={{display: 'flex'}}>
                Да
                <div 
                    className="CardInfo__textButton"
                    onClick={() => {
                        setPasswordShown(!isPasswordShown)
                        navigator.clipboard.writeText(card.password + '');
                        if (!isPasswordShown) notifier.send({
                            status: NotificationStatuses.inform,
                            message: 'Скопировано в буфер обмена',
                            active: true
                        })
                    }}
                >
                    {isPasswordShown ? card.password : 'Показать пароль'}
                </div>
            </div>
        )
    }

    const BonusTable = () => {

        return card.cardStates.map((state: ICardState) => {

            const lastTransaction = new Date(state.lastTransactionDate);

            return(
                <div className="CardInfo__tableRow" style={{backgroundColor: card.cardStates.indexOf(state) % 2 !== 0 ? 'rgb(222, 222, 222, 0.7)' : 'white'}} key={card.cardStates.indexOf(state)}>
                    <div className="CardInfo__tableItem" style={{width: '120px'}}>{state.cardKey}</div>
                    <div className="CardInfo__tableItem" style={{width: '100px'}}>{CardTypes[state.type]}</div>
                    <div className="CardInfo__tableItem" style={{width: '80px'}}>{state.active ? 'Да' : 'Нет'}</div>
                    <div className="CardInfo__tableItem" style={{width: '100px'}}>{state.bonusSum}</div>
                    <div className="CardInfo__tableItem" style={{width: '120px'}}>{lastTransaction.getFullYear() < 2000 ? '-' : lastTransaction.getDate() + '.' + (lastTransaction.getMonth() + 1) + '.' + lastTransaction.getFullYear()}</div>
                    <div className="CardInfo__tableItem" style={{width: '120px'}}>{state.currentExpenses}</div>
                    <div className="CardInfo__tableItem" style={{width: '120px'}}>{state.lastExpenses}</div>
                </div>
            )
        })
    }

    return(
        <div className="CardInfo__component">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="CardInfo__block">
                    <div className="CardInfo__title">
                        Держатель карты: <div className="CardInfo__item">{card?.surname + ' ' + card?.name + ' ' + card?.lastname}</div>
                    </div>
                    <div className="CardInfo__title">
                        Номер карты: <div className="CardInfo__item">{card.cardNumber}</div>
                    </div>
                    <div className="CardInfo__title">
                        Ключ реквизитов: <div className="CardInfo__item">{card.setKey}</div>
                    </div>
                    <div className="CardInfo__title">
                        Контактный номер: <div className="CardInfo__item">{card.phoneNumber}</div>
                    </div>
                    <div className="CardInfo__title">
                        Дата рождения: <div className="CardInfo__item">{card.birthDate}</div>
                    </div>
                    <div className="CardInfo__title">
                        Аккаунт в МП: <div className="CardInfo__item">{card.appAccount ? <AccountPassword /> : 'Нет'}</div>
                    </div>
                </div>
                <div className="CardInfo__block">
                
                </div>
            </div>

            <div className="CardInfo__block">
                <div className="CardInfo__blockTitle">Бонусная программа - найденные карты</div>
                <div className="CardInfo__table">
                    <div className="CardInfo__tableHeader">
                        <div className="CardInfo__tableHeaderItem" style={{width: '120px'}}>Ключ карты</div>
                        <div className="CardInfo__tableHeaderItem" style={{width: '100px'}}>Тип</div>
                        <div className="CardInfo__tableHeaderItem" style={{width: '80px'}}>Активная?</div>
                        <div className="CardInfo__tableHeaderItem" style={{width: '100px'}}>Бонусы</div>
                        <div className="CardInfo__tableHeaderItem" style={{width: '120px'}}>Последняя транзакция</div>
                        <div className="CardInfo__tableHeaderItem" style={{width: '120px'}}>Потрачено в этом месяце</div>
                        <div className="CardInfo__tableHeaderItem" style={{width: '120px'}}>В прошлом месяце</div>
                    </div>
                    <BonusTable />
                </div>
            </div>
            
            <div className="CardInfo__actions">
                
            </div>
        </div>
    )
}

//<div className="CardInfo__textButtonDelete">Удалить</div>