import moment from "moment";
import { INotification, INotifications, IPost } from "../types";

export const instagramPosts: IPost[] = [
    {
        id: "123456789",
        user: {
            username: "john_doe",
            profile_url: "https://randomuser.me/api/portraits/men/32.jpg",
            full_name: "John Doe",
            is_verified: true,
        },
        caption: "Exploring the great outdoors! #nature #adventure",
        image: [
            {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            {
                url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
                width: 1080,
                height: 720,
            },
        ],
        video: null,
        likes: {
            count: 4352,
            is_liked_by_user: false,
        },
        comments: {
            count: 127,
            can_post: true,
            list: [
                {
                    id: "987654321",
                    user: {
                        username: "jane_smith",
                        profile_url: "https://randomuser.me/api/portraits/women/25.jpg",
                        full_name: "Jane Smith",
                    },
                    text: "Looks amazing! 😍",
                    timestamp: "2024-09-10T12:34:56Z",
                    likes: 25,
                },
            ],
        },
        location: {
            name: "Yosemite National Park",
            latitude: 37.8651,
            longitude: -119.5383,
        },
        timestamp: "2024-09-09T18:30:00Z",
        is_saved: false,
        is_bookmarked: false,
        is_shared: true,
    },
    {
        id: "123456790",
        user: {
            username: "lisa_brown",
            profile_url: "https://randomuser.me/api/portraits/women/50.jpg",
            full_name: "Lisa Brown",
            is_verified: false,
        },
        caption: "A day at the beach 🏖️ #beachvibes",
        image: [
            {
                url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
                width: 1080,
                height: 1080,
            },
            {
                url: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5",
                width: 1080,
                height: 720,
            },
        ],
        video: null,
        likes: {
            count: 3256,
            is_liked_by_user: true,
        },
        comments: {
            count: 54,
            can_post: true,
            list: [
                {
                    id: "987654322",
                    user: {
                        username: "danny_smith",
                        profile_url: "https://randomuser.me/api/portraits/men/20.jpg",
                        full_name: "Danny Smith",
                    },
                    text: "Looks like fun! 🌊",
                    timestamp: "2024-09-08T10:30:00Z",
                    likes: 15,
                },
            ],
        },
        location: {
            name: "Miami Beach",
            latitude: 25.790654,
            longitude: -80.130045,
        },
        timestamp: "2024-09-08T10:00:00Z",
        is_saved: false,
        is_bookmarked: true,
        is_shared: false,
    },
    {
        id: "123456791",
        user: {
            username: "michael_s",
            profile_url: "https://randomuser.me/api/portraits/men/11.jpg",
            full_name: "Michael Stevens",
            is_verified: true,
        },
        caption: "City life never gets old. #urban #cityscape",
        image: [
            {
                url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                width: 1080,
                height: 720,
            },
            {
                url: "https://images.unsplash.com/photo-1478358161113-b0e11994a36b",
                width: 1080,
                height: 1350,
            },
        ],
        video: null,
        likes: {
            count: 1504,
            is_liked_by_user: false,
        },
        comments: {
            count: 38,
            can_post: true,
            list: [
                {
                    id: "987654323",
                    user: {
                        username: "susan_lee",
                        profile_url: "https://randomuser.me/api/portraits/women/33.jpg",
                        full_name: "Susan Lee",
                    },
                    text: "Amazing shot! 📸",
                    timestamp: "2024-09-07T15:45:00Z",
                    likes: 18,
                },
            ],
        },
        location: {
            name: "New York City",
            latitude: 40.712776,
            longitude: -74.005974,
        },
        timestamp: "2024-09-07T14:30:00Z",
        is_saved: false,
        is_bookmarked: false,
        is_shared: true,
    },
    {
        id: "123456792",
        user: {
            username: "emily_rose",
            profile_url: "https://randomuser.me/api/portraits/women/45.jpg",
            full_name: "Emily Rose",
            is_verified: true,
        },
        caption: "Caught in the moment. #candid",
        image: [
            {
                url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                width: 1080,
                height: 1350,
            },
            {
                url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
                width: 1080,
                height: 720,
            },
        ],
        video: null,
        likes: {
            count: 2401,
            is_liked_by_user: true,
        },
        comments: {
            count: 76,
            can_post: true,
            list: [
                {
                    id: "987654324",
                    user: {
                        username: "mark_jones",
                        profile_url: "https://randomuser.me/api/portraits/men/10.jpg",
                        full_name: "Mark Jones",
                    },
                    text: "Stunning!",
                    timestamp: "2024-09-06T11:20:00Z",
                    likes: 22,
                },
            ],
        },
        location: {
            name: "Paris, France",
            latitude: 48.8566,
            longitude: 2.3522,
        },
        timestamp: "2024-09-06T11:00:00Z",
        is_saved: true,
        is_bookmarked: false,
        is_shared: false,
    },
    {
        id: "123456794",
        user: {
            username: "olivia_h",
            profile_url: "https://randomuser.me/api/portraits/women/21.jpg",
            full_name: "Olivia Harris",
            is_verified: true,
        },
        caption: "All smiles with this one! 😊 #happiness",
        image: [
            {
                url: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d",
                width: 1080,
                height: 1080,
            },
            {
                url: "https://images.unsplash.com/photo-1489278353729-fbb79d7f1a2f",
                width: 1080,
                height: 720,
            },
        ],
        video: null,
        likes: {
            count: 1950,
            is_liked_by_user: false,
        },
        comments: {
            count: 59,
            can_post: true,
            list: [
                {
                    id: "987654326",
                    user: {
                        username: "brad_w",
                        profile_url: "https://randomuser.me/api/portraits/men/6.jpg",
                        full_name: "Brad Williams",
                    },
                    text: "Such a happy moment! 😊",
                    timestamp: "2024-09-04T12:00:00Z",
                    likes: 30,
                },
            ],
        },
        location: {
            name: "Sydney, Australia",
            latitude: -33.8688,
            longitude: 151.2093,
        },
        timestamp: "2024-09-04T11:30:00Z",
        is_saved: false,
        is_bookmarked: true,
        is_shared: false,
    },
    {
        id: "123456795",
        user: {
            username: "kevin_m",
            profile_url: "https://randomuser.me/api/portraits/men/35.jpg",
            full_name: "Kevin Miller",
            is_verified: true,
        },
        caption: "Chillin' by the pool 🏊‍♂️ #summervibes",
        image: [
            {
                url: "https://images.unsplash.com/photo-1567434495110-10bc646a43d6",
                width: 1080,
                height: 720,
            },
            {
                url: "https://images.unsplash.com/photo-1556742401-4b543cd5fbec",
                width: 1080,
                height: 720,
            },
        ],
        video: null,
        likes: {
            count: 2850,
            is_liked_by_user: true,
        },
        comments: {
            count: 103,
            can_post: true,
            list: [
                {
                    id: "987654327",
                    user: {
                        username: "melissa_k",
                        profile_url: "https://randomuser.me/api/portraits/women/34.jpg",
                        full_name: "Melissa King",
                    },
                    text: "Summer goals! 🌞",
                    timestamp: "2024-09-03T14:30:00Z",
                    likes: 28,
                },
            ],
        },
        location: {
            name: "Los Angeles",
            latitude: 34.052235,
            longitude: -118.243683,
        },
        timestamp: "2024-09-03T14:00:00Z",
        is_saved: true,
        is_bookmarked: false,
        is_shared: true,
    },
    {
        id: "123456796",
        user: {
            username: "ashley_b",
            profile_url: "https://randomuser.me/api/portraits/women/7.jpg",
            full_name: "Ashley Baker",
            is_verified: false,
        },
        caption: "Fresh coffee and good vibes ☕ #morningroutine",
        image: [
            {
                url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
                width: 1080,
                height: 1080,
            },
            {
                url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
                width: 1080,
                height: 720,
            },
        ],
        video: null,
        likes: {
            count: 3748,
            is_liked_by_user: true,
        },
        comments: {
            count: 82,
            can_post: true,
            list: [
                {
                    id: "987654328",
                    user: {
                        username: "ben_p",
                        profile_url: "https://randomuser.me/api/portraits/men/17.jpg",
                        full_name: "Ben Parker",
                    },
                    text: "Perfect start to the day! ☀️",
                    timestamp: "2024-09-02T08:00:00Z",
                    likes: 20,
                },
            ],
        },
        location: {
            name: "Seattle, WA",
            latitude: 47.6062,
            longitude: -122.3321,
        },
        timestamp: "2024-09-02T07:30:00Z",
        is_saved: false,
        is_bookmarked: false,
        is_shared: false,
    },
    {
        id: "123456797",
        user: {
            username: "david_h",
            profile_url: "https://randomuser.me/api/portraits/men/28.jpg",
            full_name: "David Hughes",
            is_verified: true,
        },
        caption: "Road trip essentials 🚗 #ontheroad",
        image: [
            {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            {
                url: "https://images.unsplash.com/photo-1506459225024-1428097a7e18",
                width: 1080,
                height: 720,
            },
        ],
        video: null,
        likes: {
            count: 3256,
            is_liked_by_user: false,
        },
        comments: {
            count: 64,
            can_post: true,
            list: [
                {
                    id: "987654329",
                    user: {
                        username: "rebecca_s",
                        profile_url: "https://randomuser.me/api/portraits/women/10.jpg",
                        full_name: "Rebecca Smith",
                    },
                    text: "So jealous of this trip!",
                    timestamp: "2024-09-01T17:45:00Z",
                    likes: 15,
                },
            ],
        },
        location: {
            name: "Route 66",
            latitude: 35.0261,
            longitude: -111.0222,
        },
        timestamp: "2024-09-01T17:30:00Z",
        is_saved: true,
        is_bookmarked: true,
        is_shared: false,
    },
    {
        id: "123456798",
        user: {
            username: "natalie_k",
            profile_url: "https://randomuser.me/api/portraits/women/14.jpg",
            full_name: "Natalie King",
            is_verified: true,
        },
        caption: "Sundays are for self-care 💆‍♀️ #relaxation",
        image: [
            {
                url: "https://images.unsplash.com/photo-1526634332515-d9a1d8ee6f92",
                width: 1080,
                height: 1080,
            },
            {
                url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
                width: 1080,
                height: 720,
            },
        ],
        video: null,
        likes: {
            count: 4102,
            is_liked_by_user: false,
        },
        comments: {
            count: 90,
            can_post: true,
            list: [
                {
                    id: "987654330",
                    user: {
                        username: "emily_d",
                        profile_url: "https://randomuser.me/api/portraits/women/2.jpg",
                        full_name: "Emily Davis",
                    },
                    text: "I need a day like this! 💆‍♀️",
                    timestamp: "2024-08-31T16:10:00Z",
                    likes: 40,
                },
            ],
        },
        location: {
            name: "London, UK",
            latitude: 51.5074,
            longitude: -0.1278,
        },
        timestamp: "2024-08-31T15:30:00Z",
        is_saved: false,
        is_bookmarked: false,
        is_shared: true,
    },
];

export const users = [
    {
        username: "parbat_lama",
        email: "parbat@gmail.com",
        mobile: 9873477347723,
        profile_url: "https://randomuser.me/api/portraits/men/1.jpg",
        isLive: true,
        isOnline: true,
    },
    {
        username: "sujan_karki",
        email: "sujan.karki@gmail.com",
        mobile: 9876543210,
        profile_url: "https://randomuser.me/api/portraits/men/2.jpg",
        isLive: false,
        isOnline: true,
    },
    {
        username: "anjali_sharma",
        email: "anjali.sharma@gmail.com",
        mobile: 9812345678,
        profile_url: "https://randomuser.me/api/portraits/women/1.jpg",
        isLive: true,
        isOnline: false,
    },
    {
        username: "rajan_thapa12",
        email: "rajan.thapa@gmail.com",
        mobile: 9823456789,
        profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
        isLive: false,
        isOnline: false,
    },
    {
        username: "priya_singh",
        email: "priya.singh@gmail.com",
        mobile: 9845678901,
        profile_url: "https://randomuser.me/api/portraits/women/2.jpg",
        isLive: true,
        isOnline: true,
    },
    {
        username: "amit_gurung",
        email: "amit.gurung@gmail.com",
        mobile: 9871234567,
        profile_url: "https://randomuser.me/api/portraits/men/4.jpg",
        isLive: false,
        isOnline: true,
    },
    {
        username: "rina_tamang",
        email: "rina.tamang@gmail.com",
        mobile: 9801234567,
        profile_url: "https://randomuser.me/api/portraits/women/3.jpg",
        isLive: true,
        isOnline: false,
    },
    {
        username: "bibek_mahat",
        email: "bibek.mahat@gmail.com",
        mobile: 9867890123,
        profile_url: "https://randomuser.me/api/portraits/men/5.jpg",
        isLive: false,
        isOnline: false,
    },
    {
        username: "sunita_rai",
        email: "sunita.rai@gmail.com",
        mobile: 9811223344,
        profile_url: "https://randomuser.me/api/portraits/women/4.jpg",
        isLive: true,
        isOnline: true,
    },
    {
        username: "manish_khadka",
        email: "manish.khadka@gmail.com",
        mobile: 9843322110,
        profile_url: "https://randomuser.me/api/portraits/men/6.jpg",
        isLive: false,
        isOnline: true,
    }
];

export const notificationsData: INotifications = {
    Today: [
        {
            users: [
                {
                    username: "sujan_karki",
                    email: "sujan.karki@gmail.com",
                    mobile: 9876543210,
                    profile_url: "https://randomuser.me/api/portraits/men/2.jpg",
                    isLive: false,
                    isOnline: true,
                },
                {
                    username: "anjali_sharma",
                    email: "anjali.sharma@gmail.com",
                    mobile: 9812345678,
                    profile_url: "https://randomuser.me/api/portraits/women/1.jpg",
                    isLive: true,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "BULK_LIKE",
            createdAt: moment().subtract(20, 'minutes').toISOString(),
        },
        {
            users: [
                {
                    username: "rajan_thapa12",
                    email: "rajan.thapa@gmail.com",
                    mobile: 9823456789,
                    profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
                    isLive: false,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "LIKE",
            createdAt: moment().subtract(12, 'minutes').toISOString(),
        },
        {
            users: [
                {
                    username: "rajan_thapa12",
                    email: "rajan.thapa@gmail.com",
                    mobile: 9823456789,
                    profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
                    isLive: false,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "COMMENT",
            comment: "OG, THIS IS FIRE 🔥",
            createdAt: moment().subtract(8, 'hours').toISOString(),
        }
    ],
    Yesterday: [
        {
            users: [
                {
                    username: "sujan_karki",
                    email: "sujan.karki@gmail.com",
                    mobile: 9876543210,
                    profile_url: "https://randomuser.me/api/portraits/men/2.jpg",
                    isLive: false,
                    isOnline: true,
                },
                {
                    username: "anjali_sharma",
                    email: "anjali.sharma@gmail.com",
                    mobile: 9812345678,
                    profile_url: "https://randomuser.me/api/portraits/women/1.jpg",
                    isLive: true,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "BULK_LIKE",
            createdAt: moment().subtract(1, 'days').toISOString(),
        },
        {
            users: [
                {
                    username: "rajan_thapa12",
                    email: "rajan.thapa@gmail.com",
                    mobile: 9823456789,
                    profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
                    isLive: false,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "LIKE",
            createdAt: moment().subtract(3, 'days').toISOString(),
        },
        {
            users: [
                {
                    username: "rajan_thapa12",
                    email: "rajan.thapa@gmail.com",
                    mobile: 9823456789,
                    profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
                    isLive: false,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "COMMENT",
            comment: "OG, THIS IS FIRE 🔥",
            createdAt: moment().subtract(6, 'days').toISOString(),
        }
    ],
    WEEKLY: [
        {
            users: [
                {
                    username: "sujan_karki",
                    email: "sujan.karki@gmail.com",
                    mobile: 9876543210,
                    profile_url: "https://randomuser.me/api/portraits/men/2.jpg",
                    isLive: false,
                    isOnline: true,
                },
                {
                    username: "anjali_sharma",
                    email: "anjali.sharma@gmail.com",
                    mobile: 9812345678,
                    profile_url: "https://randomuser.me/api/portraits/women/1.jpg",
                    isLive: true,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "BULK_LIKE",
            createdAt: moment().subtract(8, 'days').toISOString(),
        },
        {
            users: [
                {
                    username: "rajan_thapa12",
                    email: "rajan.thapa@gmail.com",
                    mobile: 9823456789,
                    profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
                    isLive: false,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "LIKE",
            createdAt: moment().subtract(10, 'days').toISOString(),
        },
        {
            users: [
                {
                    username: "rajan_thapa12",
                    email: "rajan.thapa@gmail.com",
                    mobile: 9823456789,
                    profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
                    isLive: false,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "COMMENT",
            comment: "OG, THIS IS FIRE 🔥",
            createdAt: moment().subtract(12, 'days').toISOString(),
        }
    ],
    MONTHLY: [
        {
            users: [
                {
                    username: "sujan_karki",
                    email: "sujan.karki@gmail.com",
                    mobile: 9876543210,
                    profile_url: "https://randomuser.me/api/portraits/men/2.jpg",
                    isLive: false,
                    isOnline: true,
                },
                {
                    username: "anjali_sharma",
                    email: "anjali.sharma@gmail.com",
                    mobile: 9812345678,
                    profile_url: "https://randomuser.me/api/portraits/women/1.jpg",
                    isLive: true,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "BULK_LIKE",
            createdAt: moment().subtract(18, 'days').toISOString(),
        },
        {
            users: [
                {
                    username: "rajan_thapa12",
                    email: "rajan.thapa@gmail.com",
                    mobile: 9823456789,
                    profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
                    isLive: false,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "LIKE",
            createdAt: moment().subtract(21, 'days').toISOString(),
        },
        {
            users: [
                {
                    username: "rajan_thapa12",
                    email: "rajan.thapa@gmail.com",
                    mobile: 9823456789,
                    profile_url: "https://randomuser.me/api/portraits/men/3.jpg",
                    isLive: false,
                    isOnline: false,
                },
            ],
            media: {
                url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
                width: 1080,
                height: 1350,
            },
            type: "COMMENT",
            comment: "OG, THIS IS FIRE 🔥",
            createdAt: moment().subtract(28, 'days').toISOString(),
        }
    ],
};

export const NOTIF_EVENT_TYPE_ENUM = Object.freeze({
    BULK_LIKE: 'BULK_LIKE',
    LIKE: 'LIKE',
    COMMENT: 'COMMENT',
    FOLLOW_REQUEST: 'FOLLOW_REQUEST',
});
