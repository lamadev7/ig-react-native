
export type NOTIF_EVENT_TYPE = 'BULK_LIKE' | 'LIKE' | 'COMMENT' | 'FOLLOW_REQUEST';

export interface INotifCard {
    type: NOTIF_EVENT_TYPE,
}