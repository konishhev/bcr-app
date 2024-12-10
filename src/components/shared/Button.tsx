import React from "react";
import IButtonProps from "../../types/IButtonProps";

export default function Button(props: IButtonProps) {
    return(
        <div className="Button__main" onClick={() => props.onPress ? props.onPress() : false}>
            <img className="Button__logo" src={props.logo} />
            <div className="Button__label"> {props?.label} </div>
        </div>
    )
}