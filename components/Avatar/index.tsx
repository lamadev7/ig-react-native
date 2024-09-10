import React from 'react';
import tailwind from 'twrnc';
import { Text } from 'react-native';
import { Image } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';

import { IUser } from '../../lib/types';

export default function Avatar({ username, isLive, profile }: IUser) {
    const trimmedUsername = username?.length > 12 ? `${username?.substr(0, 10)}..` : username;

    return (
        <TouchableOpacity>
            <View style={tailwind`w-21 flex items-center gap-2`}>
                <View style={tailwind`h-16 w-16 p-2 rounded-full overflow-hidden border-2 border-[#A60F93] flex-row items-center justify-center relative`}>
                    <Image
                        resizeMode="contain"
                        source={{ uri: profile?.url }}
                        style={tailwind`h-14 w-14 rounded-full`}
                    />
                </View>
                {
                    isLive && (
                        <View style={[tailwind`px-1 py-[2px] rounded-[4px] absolute top-12 bg-[#E10038] border-2 border-white`]}>
                            <Text style={tailwind`text-white text-[10px] font-semibold`}>LIVE</Text>
                        </View>
                    )
                }
                <Text style={tailwind`text-gray-700 text-[12px]`}>{trimmedUsername}</Text>
            </View>
        </TouchableOpacity>
    )
}
