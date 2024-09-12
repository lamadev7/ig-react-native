import React from 'react';
import tailwind from 'twrnc';
import { FlatList, View } from 'react-native';

import { IUser } from '../../../lib/types';
import Avatar from '../../../components/Avatar';

export default function StorySlider({ data }: { data: [] | any }) {
    return (
        <FlatList
            horizontal
            data={data}
            style={tailwind`px-2 pb-4`}
            ItemSeparatorComponent={() => <View style={tailwind`ml-1`} />}
            renderItem={({ item }: { item: IUser }) => {
                return (
                    <Avatar
                        showBorder={true}
                        isLive={item?.isLive}
                        isActive={item?.isActive}
                        username={item?.username}
                        profile_url={item?.profile_url}
                    />
                )
            }}
            showsHorizontalScrollIndicator={false}
        />
    )
}
