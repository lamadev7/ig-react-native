import React from 'react';
import tailwind from 'twrnc';
import { Text } from 'react-native';
import { Image } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';

import { IUser } from '../../lib/types';

export default function Avatar({ username, isLive, profile_url, size, showBorder }: IUser) {
    const trimmedUsername = username?.length > 12 ? `${username?.substr(0, 10)}..` : username;

    const getContainerSize = (size: string | any) => {
        if (size === 'xsm') return 'h-10 w-10';
        if (size === 'sm') return 'h-12 w-12';
        return 'h-16 w-16';
    }

    const getImageSize = (size: string | any) => {
        if (size === 'xsm') return 'h-7 w-7';
        if (size === 'sm') return 'h-10 w-10';
        return 'h-14 w-14';
    }

    return (
        <TouchableOpacity>
            <View style={tailwind`${username ? 'w-21' : ''} flex items-center gap-2`}>
                <View style={tailwind`${getContainerSize(size)} rounded-full overflow-hidden flex-row justify-center relative ${showBorder ? 'border-2 border-[#A60F93] p-2 items-center' : ''}`}>
                    <Image
                        resizeMode="cover"
                        source={{ uri: profile_url }}
                        style={tailwind`${getImageSize(size)} rounded-full`}
                    />
                </View>
                {
                    isLive && (
                        <View style={[tailwind`px-1 py-[2px] rounded-[4px] absolute top-12 bg-[#E10038] border-2 border-white`]}>
                            <Text style={tailwind`text-white text-[10px] font-semibold`}>LIVE</Text>
                        </View>
                    )
                }
                {
                    username && trimmedUsername && (
                        <Text
                            style={tailwind`text-gray-700 text-[12px]`}>
                            {trimmedUsername}
                        </Text>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}
