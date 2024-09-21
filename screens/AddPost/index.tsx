import React from "react";
import tailwind from "twrnc";
import Swiper from "react-native-swiper";
import { Image as ImageRn } from "react-native";
import MasonryList from "react-native-masonry-list";
import { CheckBox, Icon, Image } from "react-native-elements";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import TopNav from "./component/TopNav";
import useAddPost from "./hooks/useAddPost";
import BottomNav from "./component/BottomNav";
import AddPostSkeleton from "./component/AddPostSkeleton";
import NewPostForm from "./component/NewPostForm";

export default function AddPost() {
    const {
        recentMedias,
        selectedMedias,
        isFilesUploading,
        isNewPostFormOpen,
        handlePickImage,
        handleRedirectTo,
        handleSelectImage,
        handleOpenNewPostForm,
        handleCloseNewPostForm,
        handleClearSelectedMedias,
    } = useAddPost();

    return (
        <>
            {
                !isNewPostFormOpen && (
                    <View style={tailwind`bg-black h-full`}>
                        <SafeAreaView style={tailwind`flex-1`}>
                            {
                                !selectedMedias?.length && (
                                    <TopNav
                                        handlePickImage={handlePickImage}
                                        handleRedirectTo={handleRedirectTo}
                                    />
                                )
                            }
                            {isFilesUploading && <AddPostSkeleton />}
                            {
                                !isFilesUploading && selectedMedias?.length > 0 && (
                                    <SafeAreaView style={tailwind`flex-1`} >
                                        <View style={tailwind`p-2 h-[10%] flex-row items-center justify-between`}>
                                            <TouchableOpacity onPress={handleClearSelectedMedias}>
                                                <Text style={tailwind`text-white text-[16px]`}>Cancel</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={handleOpenNewPostForm}>
                                                <Text style={tailwind`text-blue-500 text-[16px]`}>Next</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={tailwind`h-[90%] w-full`}>
                                            <Swiper showsButtons={false} showsPagination dotColor="white">
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

                            {
                                !isFilesUploading && (
                                    <MasonryList
                                        columns={3}
                                        images={recentMedias}
                                        backgroundColor="black"
                                        onPressImage={handleSelectImage}
                                        customImageComponent={(props: any) => {
                                            return (
                                                <View>
                                                    <View style={tailwind`right-0 absolute z-9999`}>
                                                        <CheckBox
                                                            iconType="material"
                                                            onPress={() => handleSelectImage(props)}
                                                            checked={selectedMedias?.some((d: any) => d?.source?.uri === props?.source?.uri)}
                                                            checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                                                            uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="white" />}
                                                        />
                                                    </View>
                                                    <ImageRn {...props} />
                                                </View>
                                            )
                                        }}
                                        imageContainerStyle={tailwind`h-[200px]`}
                                    />
                                )
                            }
                        </SafeAreaView>

                        <View style={tailwind`w-full absolute bottom-15 flex-row justify-center`}>
                            <BottomNav />
                        </View>
                    </View>
                )
            }

            {
                isNewPostFormOpen && (
                    <NewPostForm
                        medias={selectedMedias}
                        handleClose={handleCloseNewPostForm}
                    />
                )
            }
        </>
    )
}
