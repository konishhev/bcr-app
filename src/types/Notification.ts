export enum NotificationStatuses {
    success = 'success',
    fail = 'fail',
    inform = 'inform'
}

export interface INotification {
    status: NotificationStatuses,
    message: string,
    duration?: number,
    active: boolean
}