import { useEffect, useState } from 'react'
import { INotifications } from '../../../lib/types';
import { notificationsData } from '../../../lib/constants';

export default function useNotification() {
    const [notifications, setNotifications] = useState<INotifications>();

    useEffect(() => {
        setNotifications(notificationsData);
    }, []);

    return {
        notifications,
    }
}
