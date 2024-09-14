import React from 'react';
import tailwind from 'twrnc';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import useNav from '../hooks/useNav';
import { createPostNavTabs } from '../../../lib/constants';

export default function Nav({ activeTab, bgColor }: any) {
    const { currentTab, handleSetCurrentTab } = useNav({ activeTab });

    return (
        <View style={tailwind`h-[45px] w-[70%] px-4 rounded-full ${bgColor ? `bg-${bgColor}` : 'bg-zinc-800'} shadow-lg flex-row items-center justify-around`}>
            {
                createPostNavTabs.map((d, i: number) => (
                    <Button
                        title={d?.title}
                        key={i.toString()}
                        buttonStyle={tailwind`${bgColor ? `bg-${bgColor}` : 'bg-zinc-800'}`}
                        onPress={() => handleSetCurrentTab(d?.title)}
                        titleStyle={tailwind`text-[14px] ${d?.title === currentTab ? 'text-white' : 'text-gray-500'}`}
                    />
                ))
            }
        </View>
    )
}
