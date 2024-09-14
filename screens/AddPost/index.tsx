import React from "react";
import tailwind from "twrnc";
import { Button } from "react-native-elements";
import MasonryList from "react-native-masonry-list";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import Nav from "./component/Nav";
import useAddPost from "./hooks/useAddPost";
import CloseIcon from "../../assets/icons/cancel.svg";
import SettingIcon from "../../assets/icons/setting.svg";
import DownIcon from "../../assets/icons/down-arrow.svg";

export default function AddPost() {
    const { recentMedias } = useAddPost();

    return (
        <View style={tailwind`bg-black h-full`}>
            <SafeAreaView style={tailwind`flex-1`}>
                <View style={tailwind`p-5 flex-row justify-between items-center`}>
                    <TouchableOpacity>
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
                            titleStyle={tailwind`p-0`}
                            title={<Text style={tailwind`text-white text-[14px] text-right`}>Manage</Text>}
                            buttonStyle={tailwind`bg-black p-0`}
                        />
                    </View>
                </View>
                <MasonryList
                    images={recentMedias}
                    backgroundColor="black"
                    imageContainerStyle={tailwind`h-[250px]`}
                />
            </SafeAreaView>
            <View style={tailwind`w-full absolute bottom-15 flex-row justify-center`}>
                <Nav />
            </View>
        </View>

    )
}
