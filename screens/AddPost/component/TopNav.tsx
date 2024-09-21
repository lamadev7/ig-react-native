import React from 'react';
import tailwind from 'twrnc';
import { Button } from 'react-native-elements';
import { TouchableOpacity, View, Text } from 'react-native';

import CloseIcon from "../../../assets/icons/cancel.svg";
import SettingIcon from "../../../assets/icons/setting.svg";
import DownIcon from "../../../assets/icons/down-arrow.svg";

export default function TopNav({ handleRedirectTo, handlePickImage }: any) {
    return (
        <>
            <View style={tailwind`p-5 flex-row justify-between items-center`}>
                <TouchableOpacity onPress={() => handleRedirectTo('Home')}>
                    <CloseIcon />
                </TouchableOpacity>
                <Text style={tailwind`text-white text-[16px] font-semibold`}>New reel</Text>
                <TouchableOpacity>
                    <SettingIcon />
                </TouchableOpacity>
            </View>
            <View style={tailwind`flex justify-center gap-5 p-5`}>
                <TouchableOpacity>
                    <View style={tailwind`flex-row items-center gap-2`}>
                        <Text style={tailwind`text-white text-[16px] font-semibold`}>Recents</Text>
                        <DownIcon />
                    </View>
                </TouchableOpacity>
                <View style={tailwind`flex-row justify-between items-center gap-2`}>
                    <Text style={tailwind`text-white text-[12px] opacity-65 w-[75%]`}>You've given Instagram access to a select number of photos and videos.</Text>
                    <Button
                        onPress={handlePickImage}
                        titleStyle={tailwind`p-0`}
                        buttonStyle={tailwind`bg-black p-0`}
                        title={<Text style={tailwind`text-white text-[14px] text-right`}>Manage</Text>}
                    />
                </View>
            </View>
        </>
    )
}
