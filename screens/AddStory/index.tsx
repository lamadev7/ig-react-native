import React from 'react';
import tailwind from 'twrnc';
import ViewShot from 'react-native-view-shot';
import { Image } from 'react-native-elements';
import { Button, TouchableOpacity, Text, View } from 'react-native';

import useAddStory from './hooks/useAddStory';
import Nav from '../AddPost/component/Nav';
import { ADD_POST_BOTTOM_NAV_ITEMS_LABEL } from '../../lib/constants';
import SwitchIcon from "../../assets/icons/switch.svg";

export default function AddStory() {
    const {
        CameraView,
        facing,
        viewRef,
        cameraRef,
        permission,
        capturedImage,
        requestPermission,
        handleSetCameraRef,
        handleCaptureImage,
        toggleCameraFacing,
    } = useAddStory();

    return (
        <View style={tailwind`flex-1`} ref={viewRef}>
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
            {!permission && (<Text>Permission Loading...</Text>)}
            {
                !permission?.granted && (
                    <View style={tailwind``}>
                        <Text style={tailwind``}>We need your permission to show the camera</Text>
                        <Button onPress={requestPermission} title="grant permission" />
                    </View>
                )
            }
            {capturedImage && <Image source={{ uri: capturedImage }} resizeMode='cover' style={tailwind`h-100 w-100`} />}
        </View>
    )
}
