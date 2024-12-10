import React from "react";

export default function Loader(props: {status: string}) {
    
    const LoadingAnimation = () => (
        <svg className="Loader__spinner" viewBox="0 0 50 50">
            <circle className="Loader__path" cx={25} cy={25} r={20} fill="none" strokeWidth={5}></circle>
        </svg>
    )

    return(
        <div className="Loader__layout">
            {props.status === 'loading' ? <LoadingAnimation /> : (props.status === 'init' ? undefined : 'Нет карт по данному поиску')}
        </div>
    )
}