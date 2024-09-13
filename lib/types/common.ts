import { NOTIF_EVENT_TYPE } from "../../screens/Notification/types";

interface LikeInfo {
    count: number;
    is_liked_by_user: boolean;
}

interface CommentSection {
    count: number;
    can_post: boolean;
    list: Comment[];
}

interface Comment {
    id: string;
    user: IUser;
    text: string;
    timestamp: string;
    likes: number;
}

interface Location {
    name: string;
    latitude: number;
    longitude: number;
}


export interface IUser {
    id: string,
    size?: 'xsm' | 'sm' | 'lg',
    full_name?: string,
    email?: string,
    mobile?: string | number,
    username?: string | any,
    profile_url: string,
    isLive?: Boolean,
    isActive?: Boolean,
    showBorder?: Boolean,
    is_verified?: Boolean,
    isOnline?: Boolean,
}
export interface IPost {
    id: string;
    user: IUser;
    caption?: string;
    image?: Media[] | null;
    video?: Media | null;
    likes?: LikeInfo;
    comments?: CommentSection;
    location?: Location | null;
    timestamp?: string;
    is_saved?: boolean;
    is_bookmarked?: boolean;
    is_shared?: boolean;
}

export interface Media {
    url: string;
    width: number;
    height: number;
}

export interface INotification {
    postId?: string | null,
    users: IUser[],
    type: NOTIF_EVENT_TYPE,
    media?: Media,
    comment?: string,
    createdAt: Date | string | number,
    updatedAt?: Date | string,
}

export interface INotifications {
    Today: INotification[],
    Yesterday: INotification[],
    WEEKLY: INotification[],
    MONTHLY: INotification[],
}