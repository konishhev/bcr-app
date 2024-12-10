import React, { Dispatch, SetStateAction } from "react";
import ICard from "../../types/ICard";

export default function CardTableComponent(props: {
    type: 'found' | 'history'
    table: Array<ICard>,
    currentCard: ICard,
    callback: Dispatch<SetStateAction<ICard>>
}) {

    const onTabClick = (item: ICard) => {
        props.callback(item);
    }

    const tableItems = props.table.length > 0 ? props.table.map((item: ICard) => {
        return(
            <div 
                className={props.currentCard === item ? "CardTable__row CardTale__rowCurrent" : "CardTable__row"} 
                onClick={() => onTabClick(item)}
                key={props.table.indexOf(item)}
            >
                <div className="CardTable__item" style={{justifyContent: 'start', paddingLeft: '10px'}}>{item.setKey}</div>
                <div className="CardTable__item" style={{justifyContent: 'end', paddingRight: '10px'}}>{item.cardNumber}</div>
            </div>
        )
    }) : undefined;

    return(
        <div className='CardTable__component'>
            <div className="CardTable__title">{props.type === 'found' ? 'Список найденных реквизитов' : 'История поиска'}</div>
            <div className="CardTable__table">
                <div style={{display: 'flex'}}>
                    <div className="CardTable__header" >Ключ реквизитов</div>
                    <div className="CardTable__header">Номер карты</div>
                </div>
                {tableItems}
            </div>
        </div>
    )
}