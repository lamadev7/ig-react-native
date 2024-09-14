import React from 'react';
import tailwind from 'twrnc';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Avatar from '../Avatar';
import LoveIcon from "../../assets/icons/love.svg";
import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { SCREEN_NAMES, users } from '../../lib/constants';
import LoveFilledIcon from "../../assets/icons/love_filled.svg";
import HomeFilledIcon from "../../assets/icons/home_filled.svg";
import SearchFilledIcon from "../../assets/icons/search_filled.svg";
import PluseOutlineIcon from "../../assets/icons/plus_outline.svg";

export default function BottomNav({ activeNav }: { activeNav: string }) {
    const navigation = useNavigation<any>();

    const handleNavigateTo = (route: string) => {
        navigation.navigate(route);
    }

    return (
        <View style={tailwind`pt-4 absolute bottom-0 w-full h-[80px] flex-row justify-around bg-white`}>
            <TouchableOpacity onPress={() => handleNavigateTo(SCREEN_NAMES.HOME)}>
                {activeNav === SCREEN_NAMES.HOME ? <HomeFilledIcon /> : <HomeIcon />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateTo(SCREEN_NAMES.SEARCH)}>
                {activeNav === SCREEN_NAMES.SEARCH ? <SearchFilledIcon /> : <SearchIcon />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateTo(SCREEN_NAMES.ADD_POST)}>
                <PluseOutlineIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigateTo(SCREEN_NAMES.NOTIFICATION)}>
                {activeNav === SCREEN_NAMES.NOTIFICATION ? <LoveFilledIcon /> : <LoveIcon />}
            </TouchableOpacity>
            <Avatar size='xsm' profile_url={users?.[0]?.profile_url} id={''} />
        </View>
    )
}
