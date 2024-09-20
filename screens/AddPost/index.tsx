import React from "react";
import tailwind from "twrnc";
import { Button, Image } from "react-native-elements";
import MasonryList from "react-native-masonry-list";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import Nav from "./component/Nav";
import useAddPost from "./hooks/useAddPost";
import CloseIcon from "../../assets/icons/cancel.svg";
import SettingIcon from "../../assets/icons/setting.svg";
import DownIcon from "../../assets/icons/down-arrow.svg";
import Swiper from "react-native-swiper";

export default function AddPost() {
    const { recentMedias, selectedMedias, handleSelectImage, handleRedirectTo, handlePickImage, handleClearSelectedMedias } = useAddPost();

    return (
        <View style={tailwind`bg-black h-full`}>

            <SafeAreaView style={tailwind`flex-1`}>
                {
                    !selectedMedias?.length && (
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
                {
                    selectedMedias?.length > 0 && (
                        <SafeAreaView style={tailwind`flex-1`} >
                            <View style={tailwind`p-2 h-[10%] flex-row items-center justify-between`}>
                                <TouchableOpacity onPress={handleClearSelectedMedias}>
                                    <Text style={tailwind`text-white text-[16px]`}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={tailwind`text-blue-500 text-[16px]`}>Next</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={tailwind`h-[90%] w-full`}>
                                <Swiper showsButtons={false} dotColor='white' activeDotStyle={tailwind`relative top-14`} dotStyle={tailwind`bg-gray-400 relative top-14`}>
                                    {
                                        selectedMedias?.map((d: any, i: number) => (
                                            <View key={i.toString()}>
                                                <Image
                                                    resizeMode='cover'
                                                    style={tailwind`w-full h-full`}
                                                    source={{ uri: d?.source?.uri }}
                                                />
                                            </View>
                                        ))
                                    }
                                </Swiper>
                            </View>
                        </SafeAreaView>
                    )
                }
                <MasonryList
                    images={recentMedias}
                    backgroundColor="black"
                    onPressImage={handleSelectImage}
                    imageContainerStyle={tailwind`${selectedMedias?.length > 0 ? 'h-[150px]' : 'h-[250px]'}`}
                />
            </SafeAreaView>
            <View style={tailwind`w-full absolute bottom-15 flex-row justify-center`}>
                <Nav />
            </View>
        </View>

    )
}
