import React from 'react';
import tailwind from 'twrnc';
import { FlatList, View } from 'react-native';
import Avatar from '../../../components/Avatar';
import { IUser } from '../../../lib/types';

export default function StorySlider({ data }: { data: [] | any }) {
    return (
        <FlatList
            horizontal
            data={data}
            style={tailwind`px-2 pb-2`}
            ItemSeparatorComponent={() => <View style={tailwind`ml-3`} />}
            renderItem={({ item }: { item: IUser }) => {
                return (
                    <Avatar
                        isLive={item?.isLive}
                        profile={item?.profile}
                        isActive={item?.isActive}
                        username={item?.username}
                    />
                )
            }}
            showsHorizontalScrollIndicator={false}
        />
    )
}
