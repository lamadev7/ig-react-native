import React from 'react';
import tailwind from 'twrnc';
import ViewShot from 'react-native-view-shot';
import { Icon, Image, } from 'react-native-elements';
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';

import Nav from '../AddPost/component/Nav';
import useAddStory from './hooks/useAddStory';
import Avatar from '../../components/Avatar';
import SwitchIcon from "../../assets/icons/switch.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import ThreeDotIcon from "../../assets/icons/three-dot.svg";
import SendBlackIcon from "../../assets/icons/send-black.svg";
import { ADD_POST_BOTTOM_NAV_ITEMS_LABEL } from '../../lib/constants';

export default function AddStory() {
    const {
        CameraView,
        facing,
        viewRef,
        cameraRef,
        isOpenThreeDotList,
        capturedImage,
        handleSetCameraRef,
        handleCaptureImage,
        toggleCameraFacing,
        handleSaveToGallery,
        handleOpenThreeDotList,
        handleCloseCapturedImage,
    } = useAddStory();

    return (
        <>
            <View style={tailwind`flex-1 bg-black`} ref={viewRef}>
                {
                    !capturedImage && (
                        <ViewShot ref={viewRef} style={tailwind`flex-1`}>
                            <CameraView style={tailwind`flex-1 h-full`} facing={facing} ref={handleSetCameraRef}>
                                <View style={tailwind`absolute bottom-10 w-full flex items-center gap-5`}>
                                    <View style={tailwind`bg-white w-15 h-15 flex-row justify-center items-center rounded-full`}>
                                        <TouchableOpacity onPress={handleCaptureImage}>
                                            <View style={tailwind`h-12 w-12 border border-zinc-700 rounded-full`}></View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={tailwind`pt-5 flex-row items-start justify-center gap-5 bg-black w-full h-full`}>
                                        <Nav activeTab={ADD_POST_BOTTOM_NAV_ITEMS_LABEL.STORY} bgColor="black" />
                                        <TouchableOpacity onPress={toggleCameraFacing}>
                                            <View style={tailwind`bg-zinc-700 p-2 rounded-full flex items-center justify-center`}>
                                                <SwitchIcon />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </CameraView>
                        </ViewShot>
                    )
                }
                {
                    capturedImage && (
                        <SafeAreaView>
                            <View style={tailwind`h-full w-full`}>
                                <View style={tailwind`w-full p-4 absolute top-1 z-99999 flex-row justify-between items-center`}>
                                    <TouchableOpacity onPress={handleCloseCapturedImage}>
                                        <View style={tailwind`h-11 w-11 flex items-center justify-center rounded-full bg-zinc-600`}>
                                            <CancelIcon />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={handleOpenThreeDotList}>
                                        <View style={tailwind`h-11 w-11 flex items-center justify-center rounded-full bg-zinc-600`}>
                                            <ThreeDotIcon />
                                        </View>
                                    </TouchableOpacity>

                                    {
                                        isOpenThreeDotList && (
                                            <View style={tailwind`p-4 flex gap-3 absolute right-5 top-18 bg-zinc-700 opacity-80 w-[60%] rounded-md`}>
                                                <TouchableOpacity>
                                                    <View style={tailwind`pb-3 border-b-[0.2px] border-zinc-500 flex-row justify-between items-center`}>
                                                        <Text style={tailwind`text-white`}>Draw</Text>
                                                        <Icon color="white" type='font-awesome-5' name='paint-brush' size={18} />
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={handleSaveToGallery}>
                                                    <View style={tailwind`flex-row justify-between items-center`}>
                                                        <Text style={tailwind`text-white`}>Save</Text>
                                                        <Icon color="white" type='Octicons' name='download' />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }
                                </View>
                                <Image
                                    resizeMode='cover'
                                    source={{ uri: capturedImage }}
                                    style={tailwind`h-[95%] w-full rounded-2xl`}
                                />
                            </View>
                            <View style={tailwind`px-2 absolute bottom-12 z-99999 flex-row gap-3`}>
                                <TouchableOpacity>
                                    <View style={tailwind`pl-2 pr-5 py-[1px] flex-row items-center gap-1 shadow-xl rounded-full bg-zinc-700`}>
                                        <Avatar size='xsm' profile_url={'https://randomuser.me/api/portraits/men/4.jpg'} id={''} />
                                        <Text style={tailwind`text-white text-[12px] text-gray-200`}>Your story</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={tailwind`px-5 py-3 flex-row items-center gap-2 shadow-xl rounded-full bg-zinc-700`}>
                                        <SendBlackIcon />
                                        <Text style={tailwind`text-white text-[12px] text-gray-200`}>Send Message</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    )
                }
            </View>
        </>
    )
}
