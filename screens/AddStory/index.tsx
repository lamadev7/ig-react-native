import React from 'react';
import tailwind from 'twrnc';
import ViewShot from 'react-native-view-shot';
import { Icon, Image, } from 'react-native-elements';
import {
    SoftLightBlend,
    Emboss,
    Earlybird,
    Invert,
    RadialGradient
} from 'react-native-image-filter-kit';
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native';


import Nav from '../AddPost/component/Nav';
import Avatar from '../../components/Avatar';
import useAddStory from './hooks/useAddStory';
import SwitchIcon from "../../assets/icons/switch.svg";
import FilterIcon from "../../assets/icons/filter.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import FlashOnIcon from "../../assets/icons/flash-on.svg";
import FlashOffIcon from "../../assets/icons/flash-off.svg";
import ThreeDotIcon from "../../assets/icons/three-dot.svg";
import FlashAutoIcon from "../../assets/icons/flash-auto.svg";
import SendBlackIcon from "../../assets/icons/send-black.svg";
import { ADD_POST_BOTTOM_NAV_ITEMS_LABEL, CAMERA_ENUM, SCREEN_NAMES } from '../../lib/constants';

export default function AddStory() {
    const {
        CameraView,
        facing,
        viewRef,
        cameraRef,
        flashMode,
        isOpenThreeDotList,
        capturedImage,
        handleFlashMode,
        handleRedirectTo,
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
                            <CameraView flash={flashMode} style={tailwind`flex-1 h-full`} facing={facing} ref={handleSetCameraRef}>
                                <SafeAreaView>
                                    <View style={tailwind`p-5 flex-row justify-between`}>
                                        <TouchableOpacity onPress={() => handleRedirectTo(SCREEN_NAMES.HOME)}>
                                            <CancelIcon />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleFlashMode}>
                                            {flashMode === CAMERA_ENUM.ON ? <FlashOnIcon /> : flashMode === CAMERA_ENUM.AUTO ? <FlashAutoIcon /> : <FlashOffIcon />}
                                        </TouchableOpacity>
                                    </View>
                                </SafeAreaView>
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
                                    <View style={tailwind`flex-row items-center gap-5`}>
                                        <TouchableOpacity>
                                            <View style={tailwind`h-11 w-11 flex-row justify-center items-center gap-1 shadow-xl rounded-full bg-zinc-700`}>
                                                <FilterIcon />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleOpenThreeDotList}>
                                            <View style={tailwind`h-11 w-11 flex items-center justify-center rounded-full bg-zinc-600`}>
                                                <ThreeDotIcon />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    {
                                        isOpenThreeDotList && (
                                            <View style={tailwind`p-5 flex gap-4 absolute right-5 top-18 bg-zinc-700 opacity-80 w-[60%] rounded-md`}>
                                                <TouchableOpacity>
                                                    <View style={tailwind`pb-3 border-b-[0.2px] border-zinc-500 flex-row justify-between items-center`}>
                                                        <Text style={tailwind`text-white`}>Draw</Text>
                                                        <Icon color="white" type='font-awesome-5' name='paint-brush' size={18} />
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={handleSaveToGallery}>
                                                    <View style={tailwind`flex-row justify-between items-center`}>
                                                        <Text style={tailwind`text-white`}>Save</Text>
                                                        <Icon color="white" type='feather' name='download' />
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
                            <View style={tailwind`w-full px-2 absolute bottom-12 z-99999 flex-row justify-center gap-4`}>
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
