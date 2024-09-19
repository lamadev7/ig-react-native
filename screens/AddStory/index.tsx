import React from 'react';
import tailwind from 'twrnc';
import ViewShot from 'react-native-view-shot';
import Slider from '@react-native-community/slider';
import { Icon, Image as ImageR } from 'react-native-elements';
import { Canvas, Blur, Image, ColorMatrix, useImage } from "@shopify/react-native-skia";
import { SafeAreaView, TouchableOpacity, View, Text, ScrollView, StatusBar } from 'react-native';

import Nav from '../AddPost/component/Nav';
import Avatar from '../../components/Avatar';
import useAddStory from './hooks/useAddStory';
import SwitchIcon from "../../assets/icons/switch.svg";
import FilterIcon from "../../assets/icons/filter.svg";
import CancelIcon from "../../assets/icons/cancel.svg";
import FlashOnIcon from "../../assets/icons/flash-on.svg";
import FlashOffIcon from "../../assets/icons/flash-off.svg";
import FlashAutoIcon from "../../assets/icons/flash-auto.svg";
import SendBlackIcon from "../../assets/icons/send-black.svg";
import { ADD_POST_BOTTOM_NAV_ITEMS_LABEL, CAMERA_ENUM, colorEffectMatrix, FILTER_EFFECT_TYPES, FILTER_ENUM, SCREEN_NAMES } from '../../lib/constants';

export default function AddStory() {
    const {
        CameraView,
        facing,
        viewRef,
        editMode,
        cameraRef,
        canvasRef,
        flashMode,
        blurValue,
        screenWidth,
        screenHeight,
        capturedImage,
        selectedFilterColor,
        handleFlashMode,
        handleRedirectTo,
        handleSetCameraRef,
        handleCaptureImage,
        toggleCameraFacing,
        handleApplyEditMode,
        handleSaveToGallery,
        handleCloseEditMode,
        handleBlurValueChange,
        handleCloseCapturedImage,
        handleApplySelectedFilter,
    } = useAddStory();
    const imageuri = useImage(capturedImage);

    return (
        <>
            <StatusBar barStyle="light-content" />
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
                                    <View style={tailwind`flex-row items-center gap-4`}>
                                        <TouchableOpacity onPress={handleSaveToGallery}>
                                            <View style={tailwind`h-11 w-11 flex items-center justify-center rounded-full bg-zinc-600`}>
                                                <Icon color="white" type='feather' name='download' />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <Canvas style={{ width: screenWidth, height: screenHeight }} ref={canvasRef}>
                                    <Image
                                        x={0}
                                        y={0}
                                        fit="fill"
                                        image={imageuri}
                                        width={screenWidth}
                                        height={screenHeight}

                                    >
                                        <Blur blur={blurValue} mode="clamp">
                                            {
                                                selectedFilterColor && (
                                                    <ColorMatrix matrix={selectedFilterColor?.matrix} />
                                                )
                                            }
                                        </Blur>
                                    </Image>
                                </Canvas>

                                {
                                    editMode == FILTER_ENUM.BLUR && (
                                        <View style={tailwind`w-full pl-2 pr-6 absolute bottom-35 flex-row justify-between items-center`}>
                                            <Slider
                                                step={1}
                                                minimumValue={0}
                                                maximumValue={50}
                                                value={blurValue}
                                                minimumTrackTintColor="#FFFFFF"
                                                style={{ width: 250, height: 20 }}
                                                onValueChange={handleBlurValueChange}
                                                maximumTrackTintColor="rgba(240, 240, 240, 0.5)"
                                            />
                                            <TouchableOpacity onPress={handleCloseEditMode}>
                                                <Icon name='check' type='feather' color='white' />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }

                                {
                                    editMode === FILTER_ENUM.EFFECTS && (
                                        <View style={tailwind`absolute bottom-32 w-full pl-2 pr-6 flex-row justify-end items-center gap-3`}>
                                            {
                                                colorEffectMatrix?.map((d: any, i) => (
                                                    <TouchableOpacity key={i.toString()} onPress={() => handleApplySelectedFilter(d)}>
                                                        <View
                                                            style={tailwind`h-11 w-11 flex-row justify-center items-center shadow-lg rounded-full bg-gray-300 overflow-hidden ${editMode === FILTER_ENUM.ROTATE ? 'opacity-75' : ''} ${d.name === selectedFilterColor?.name ? 'border-4 border-dotted border-blue-500' : ''}`}
                                                        >
                                                            {
                                                                d?.name === FILTER_EFFECT_TYPES.DEFAULT ? (
                                                                    <ImageR
                                                                        resizeMode='cover'
                                                                        style={tailwind`h-5 w-5 rounded-full`}
                                                                        source={require('../../assets/icons/disabled.png')}
                                                                    />
                                                                ) : (
                                                                    <Canvas style={{ height: '100%', width: '100%' }}>
                                                                        <Image
                                                                            x={0}
                                                                            y={0}
                                                                            fit="cover"
                                                                            width={45}
                                                                            height={45}
                                                                            image={imageuri}
                                                                        >
                                                                            <ColorMatrix matrix={d?.matrix} />
                                                                        </Image>
                                                                    </Canvas>
                                                                )
                                                            }
                                                        </View>
                                                    </TouchableOpacity>
                                                ))
                                            }
                                        </View>
                                    )
                                }

                                <ScrollView style={tailwind`w-full absolute bottom-18`} horizontal showsHorizontalScrollIndicator={false}>
                                    <View style={tailwind`pl-2 flex-row items-center justify-center gap-4 relative`}>
                                        <TouchableOpacity onPress={() => handleApplyEditMode(FILTER_ENUM.ROTATE)}>
                                            <View style={tailwind`h-11 w-11 flex-row justify-center items-center gap-1 shadow-lg rounded-full bg-zinc-700 ${editMode === FILTER_ENUM.ROTATE ? 'opacity-75' : ''}`}>
                                                <Icon name='crop-rotate' type='materialicons' color='white' />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleApplyEditMode(FILTER_ENUM.CROP)}>
                                            <View style={tailwind`h-11 w-11 flex-row justify-center items-center gap-1 shadow-lg rounded-full bg-zinc-700 ${editMode === FILTER_ENUM.CROP ? 'opacity-75' : ''}`}>
                                                <Icon name='crop' type='entypo' color='white' />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleApplyEditMode(FILTER_ENUM.FLIP)}>
                                            <View style={tailwind`h-11 w-11 flex-row justify-center items-center gap-1 shadow-lg rounded-full bg-zinc-700 ${editMode === FILTER_ENUM.FLIP ? 'opacity-75' : ''}`}>
                                                <Icon name='flip' type='materialicons' color='white' />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleApplyEditMode(FILTER_ENUM.BLUR)}>
                                            <View style={tailwind`h-11 w-11 flex-row justify-center items-center gap-1 shadow-lg rounded-full bg-zinc-700 ${editMode === FILTER_ENUM.BLUR ? 'opacity-75' : ''}`}>
                                                <Icon name='lens-blur' type='materialicons' color='white' />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleApplyEditMode(FILTER_ENUM.PAINT)}>
                                            <View style={tailwind`h-11 w-11 flex-row justify-center items-center gap-1 shadow-lg rounded-full bg-zinc-700 ${editMode === FILTER_ENUM.PAINT ? 'opacity-75' : ''}`}>
                                                <Icon color="white" type='font-awesome-5' name='paint-brush' size={18} />
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleApplyEditMode(FILTER_ENUM.EFFECTS)}>
                                            <View style={tailwind`h-11 w-11 flex-row justify-center items-center gap-1 shadow-lg rounded-full bg-zinc-700 ${editMode === FILTER_ENUM.EFFECTS ? 'opacity-75' : ''}`}>
                                                <FilterIcon />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={tailwind`w-full px-2 absolute bottom-12 z-99999 flex-row gap-2`}>
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
