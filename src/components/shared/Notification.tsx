import React, { useEffect, useLayoutEffect, useState } from "react";
import { INotification, NotificationStatuses } from "../../types/Notification.ts";

export default function Notification(notification: INotification) {

    const width = notification.message?.length * 12;
    const color = () => {
        switch(notification.status){
            case NotificationStatuses.success:
                return 'rgba(29, 168, 0, 0.699)';
            case NotificationStatuses.fail:
                return 'rgba(255, 102, 102, 0.699)';
            case NotificationStatuses.inform:
                return 'rgba(66, 170, 255, 0.699)';
        }
    };

    const borderColor = () => {
        switch(notification.status){
            case NotificationStatuses.success:
                return 'rgba(136, 255, 144, 1)';
            case NotificationStatuses.fail:
                return 'rgba(255, 102, 102, 1)';
            case NotificationStatuses.inform:
                return 'rgba(66, 170, 255, 1)';
        }
    };

    if (notification.active)
        return(
            <div 
                style={{
                    width: width,
                    height: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: color(),
                    border: borderColor(),
                    borderRadius: '200px',
                    color: "white",
                    fontSize: '16px'
                }}
            >
                {notification.message}
            </div>
        )
    else return(<></>)
}