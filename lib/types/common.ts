
export interface IProfile {
    url: string,
    alt?: string,
}

export interface IUser {
    username: string,
    profile: IProfile,
    isLive: Boolean,
    isActive: Boolean,
}