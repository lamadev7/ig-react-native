export const colorEffectMatrix = [
    {
        name: "Default",
        matrix: [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ],
    },
    {
        name: "Psychedelic",
        matrix: [
            -0.578, 0.99, 0.588, 0, 0,
            0.469, 0.535, -0.003, 0, 0,
            0.015, 1.69, -0.703, 0, 0,
            0, 0, 0, 1, 0,
        ],
    },
    {
        name: "Grayscale",
        matrix: [
            0.2126, 0.7152, 0.0722, 0, 0,
            0.2126, 0.7152, 0.0722, 0, 0,
            0.2126, 0.7152, 0.0722, 0, 0,
            0, 0, 0, 1, 0,
        ],
    },
    {
        name: "Sepia",
        matrix: [
            0.393, 0.769, 0.189, 0, 0,
            0.349, 0.686, 0.168, 0, 0,
            0.272, 0.534, 0.131, 0, 0,
            0, 0, 0, 1, 0,
        ],
    },
    {
        name: "Hue Rotate",
        matrix: [
            0.866, -0.5, 0.5, 0, 0,
            0.5, 0.866, -0.5, 0, 0,
            -0.5, 0.5, 0.866, 0, 0,
            0, 0, 0, 1, 0,
        ],
    },
    {
        name: "Saturation",
        matrix: [
            - 0.214, 1.290, - 0.072, 0.000, 0.000,
            - 0.214, - 0.719, 1.930, 0.000, 0.000,
            0.000, 0.000, 0.000, 1.000, 0.000
        ],
    },
];


export const ADD_POST_BOTTOM_NAV_ITEMS_LABEL = Object.freeze({
    POST: 'POST',
    STORY: 'STORY',
    REELS: 'REELS',
    LIVE: 'LIVE',
});

export const SCREEN_NAMES = Object.freeze({
    ADD_POST: 'AddPost',
    ADD_STORY: 'AddStory',
    HOME: 'Home',
    LOGIN: 'Login',
    NOTIFICATION: 'Notification',
    SEARCH: 'Search',
    ADD_REELS: 'AddReels',
    ADD_LIVE: 'AddLive',
});

export const createPostNavTabs = [
    { title: ADD_POST_BOTTOM_NAV_ITEMS_LABEL.POST, screenName: SCREEN_NAMES.ADD_POST },
    { title: ADD_POST_BOTTOM_NAV_ITEMS_LABEL.STORY, screenName: SCREEN_NAMES.ADD_STORY },
    { title: ADD_POST_BOTTOM_NAV_ITEMS_LABEL.REELS, screenName: SCREEN_NAMES.ADD_REELS },
    { title: ADD_POST_BOTTOM_NAV_ITEMS_LABEL.LIVE, screenName: SCREEN_NAMES.ADD_LIVE },
]

export const NOTIF_EVENT_TYPE_ENUM = Object.freeze({
    BULK_LIKE: 'BULK_LIKE',
    LIKE: 'LIKE',
    COMMENT: 'COMMENT',
    FOLLOW_REQUEST: 'FOLLOW_REQUEST',
});

export const CAMERA_ENUM = Object.freeze({
    ON: 'on',
    OFF: 'off',
    AUTO: 'auto',
});

export const FILTER_ENUM = Object.freeze({
    BLUR: 'blur',
    ROTATE: 'rotate',
    CROP: 'crop',
    FLIP: 'flip',
    PAINT: 'paint',
    EFFECTS: 'effects',
});

export const FILTER_EFFECT_TYPES = Object.freeze({
    DEFAULT: 'Default',

});

export const colors = [
    {
        name: 'black',
        value: 'black'
    },
    {
        name: 'white',
        value: 'white'
    },
    {
        name: 'red',
        value: 'red'
    },
    {
        name: 'blue',
        value: 'blue'
    },
    {
        name: 'green',
        value: 'green'
    },
    {
        name: 'purple',
        value: 'purple'
    },
    {
        name: 'orange',
        value: 'orange'
    },
    {
        name: 'yellow',
        value: 'yellow'
    }
];
