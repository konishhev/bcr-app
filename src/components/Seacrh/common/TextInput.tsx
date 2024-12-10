import React, {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import { SwitchEnum } from '../../../types/SwitchEnum.ts';

export default function TextInput(props: {
    currentSeacrh: SwitchEnum,
    setTarget: Dispatch<SetStateAction<string>>

}) {

    const [value, setValue] = useState('');

    useEffect(() => setValue(''), [props.currentSeacrh])

    return(
        <textarea 
            className='textarea'
            placeholder={props.currentSeacrh === SwitchEnum.PHONE_NUMBER_SEARCH ? '+7 (***) ***-**-**' : 'Номер бонусной карты'}
            value={value}
            onChange={(params: ChangeEvent<HTMLTextAreaElement>) => {
                if (props.currentSeacrh === SwitchEnum.PHONE_NUMBER_SEARCH){

                    let phoneNumber = (value.length === 0 ? '7' : '') +
                    ((params.target.value.split('')).filter((char: string) => new RegExp(/[0-9]/).test(char))).join('');

                    if (phoneNumber.length > 11) phoneNumber = phoneNumber.slice(0, 11);

                    props.setTarget(phoneNumber);
                    setValue(
                            (phoneNumber.length > 0 ? '+' + phoneNumber[0] : '') +
                            (phoneNumber.length > 1 ? ' (' + phoneNumber.slice(1, 4) : '') +
                            (phoneNumber.length > 4 ? ') ' + phoneNumber.slice(4, 7) : '') +
                            (phoneNumber.length > 7 ? '-' + phoneNumber.slice(7, 9): '') +
                            (phoneNumber.length > 9 ? '-' + phoneNumber.slice(9, 11) : '')
                    );
                }
                else if (props.currentSeacrh === SwitchEnum.BONUS_CARD_NUMBER_SEARCH) {

                    let cardNumber = ((params.target.value.split('')).filter((char: string) => new RegExp(/[0-9]/).test(char))).join('');

                    if (cardNumber.length > 16) cardNumber = cardNumber.slice(0, 16);

                    props.setTarget(cardNumber);
                    setValue(
                        () => {
                            let output = '';
                            for (let i = 0; i < cardNumber.length; i++) {
                                if (i % 4 === 0 && i !== 0) output += ' ';
                                output += cardNumber[i];
                            }
                                
                            return output;
                        }
                    )
                }
            }}
        />
    )
}