import React, { Dispatch, SetStateAction, useState } from "react";
import { SwitchEnum } from "../../../types/SwitchEnum.ts";

export default function SearchSwitch(props: {
    current: SwitchEnum,
    setSwitch: Dispatch<SetStateAction<SwitchEnum>>
}) {
    return(
        <div className="SearchSwitch__container">
            <div 
                className={"SearchSwitch__item" + (props.current === SwitchEnum.PHONE_NUMBER_SEARCH ? " SearchSwitch__item_selected" : ' ' + undefined)} 
                onClick={() => props.setSwitch(SwitchEnum.PHONE_NUMBER_SEARCH)}
            >
                По номеру телефона
            </div>
            <div 
                className={"SearchSwitch__item" + (props.current === SwitchEnum.BONUS_CARD_NUMBER_SEARCH ? " SearchSwitch__item_selected" : ' ' + undefined)}
                onClick={() => props.setSwitch(SwitchEnum.BONUS_CARD_NUMBER_SEARCH)}
            >
                По номеру БК
            </div>
        </div>
    )
}