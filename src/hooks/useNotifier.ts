import createStateHook from "../hocs/Subscribable.ts";
import { INotification, NotificationStatuses } from "../types/Notification.ts";

const notifierServiсe = createStateHook<INotification>({active: false, status: NotificationStatuses.success, message: ''});

export default function useNotifier() {
    const [state, setState] = notifierServiсe();
    
    return {
        send: (notification: INotification) => {
            setState(notification);
            setTimeout(() => setState({...state, active: false}), 4000)
        },
        close: () => setState({...state, active: false}),
        getNotification: () => state,
    }
}