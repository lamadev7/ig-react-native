import React from 'react';
import tailwind from 'twrnc';
import { TouchableOpacity, View } from 'react-native';

import LoveIcon from "../../assets/icons/love.svg";
import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search.svg";
import LoveFilledIcon from "../../assets/icons/love_filled.svg";
import HomeFilledIcon from "../../assets/icons/home_filled.svg";
import SearchFilledIcon from "../../assets/icons/search_filled.svg";
import PluseOutlineIcon from "../../assets/icons/plus_outline.svg";
import Avatar from '../Avatar';
import { users } from '../../lib/constants';
import { useNavigation } from '@react-navigation/native';

export default function BottomNav({ activeNav }: { activeNav: string }) {
    const navigation = useNavigation<any>();

    const handleNavigateTo = (route: string) => {
        navigation.navigate(route);
    }

    return (
        <View style={tailwind`absolute bottom-0 w-full h-[60px] flex-row justify-around items-center bg-white`}>
            <TouchableOpacity onPress={() => handleNavigateTo('Home')}>
                {activeNav === 'Home' ? <HomeFilledIcon /> : <HomeIcon />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateTo('Search')}>
                {activeNav === "Search" ? <SearchFilledIcon /> : <SearchIcon />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateTo('AddPost')}>
                <PluseOutlineIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateTo('Notification')}>
                {activeNav === "Notification" ? <LoveFilledIcon /> : <LoveIcon />}
            </TouchableOpacity>
            <Avatar size='xsm' profile_url={users?.[0]?.profile_url} />
        </View>
    )
}
