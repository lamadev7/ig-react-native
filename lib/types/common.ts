

export interface IUser {
    size?: 'xsm' | 'sm' | 'lg',
    full_name?: string,
    username?: string | any,
    profile_url: string,
    isLive?: Boolean,
    isActive?: Boolean,
    showBorder?: Boolean,
    is_verified?: Boolean,
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
