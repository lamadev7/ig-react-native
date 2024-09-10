import React from 'react';
import tailwind from 'twrnc';
import { TextInput } from 'react-native';
import { SafeAreaView, View } from 'react-native';
import MasonryList from "react-native-masonry-list";
import BottomNav from '../../components/BottomNav';

export default function Search() {
    const trendingImages = [
        {
            uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg",
            dimensions: { width: 500, height: 600 }
        },
        { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
        {
            uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
            dimensions: { width: 1080, height: 1920 }
        },
        {
            URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
            id: "blpccx4cn"
        },
        { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
        { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
    ]

    return (
        <SafeAreaView style={tailwind`flex-1 bg-white`}>
            <View style={tailwind`flex-1 p-5 gap-5`}>
                <TextInput
                    inputMode='search'
                    placeholder='Search'
                    autoCapitalize='none'
                    style={tailwind`py-3 px-6 bg-slate-100 border border-gray-100 rounded-lg`}
                />
                <View style={tailwind`flex-1 mb-10`}>
                    <MasonryList images={trendingImages} />
                </View>

                <BottomNav activeNav='Search' />
            </View>
        </SafeAreaView>
    )
}
