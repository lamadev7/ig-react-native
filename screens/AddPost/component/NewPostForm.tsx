import React from 'react';
import tailwind from 'twrnc';
import { Button, Icon, Image } from 'react-native-elements';
import { SafeAreaView, TouchableOpacity, View, FlatList, Text, TextInput } from 'react-native';

import useNewPostForm from '../hooks/useNewPostForm';


interface INewPostFormProps {
    medias: [],
    handleClose?: () => void
};

export default function NewPostForm({ medias, handleClose }: INewPostFormProps) {
    const { formData, handleCaptionChange } = useNewPostForm();

    return (
        <SafeAreaView style={tailwind`h-[85%]`}>
            <View style={tailwind`flex gap-2`}>
                <View style={tailwind`flex-row items-center relative`}>
                    <TouchableOpacity style={tailwind`w-[10%]`} onPress={handleClose}>
                        <Icon type="fontawesome6" name="chevron-left" size={35} />
                    </TouchableOpacity>
                    <View style={tailwind`w-[90%] flex-row justify-center`}>
                        <Text style={tailwind`text-[16px] font-bold`}>New Post</Text>
                    </View>
                </View>
                <View style={tailwind`h-full flex justify-between px-2`}>
                    <View style={tailwind`flex gap-5`}>
                        <FlatList
                            horizontal
                            data={medias}
                            style={tailwind`h-[250px] w-full`}
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => <View style={tailwind`ml-2`} />}
                            renderItem={({ index, item }: any) => (
                                <TouchableOpacity>
                                    <Image
                                        key={index}
                                        resizeMode='cover'
                                        style={tailwind`h-[250px] w-[200px] rounded-md`}
                                        source={{ uri: item?.source?.uri }}
                                    />
                                </TouchableOpacity>
                            )}
                        />

                        <TextInput
                            multiline
                            inputMode='text'
                            placeholderTextColor='#656565'
                            value={formData?.caption ?? ''}
                            placeholder='Write a caption...'

                            onChange={handleCaptionChange}
                        />
                    </View>
                    <View style={tailwind`flex-row justify-center gap-3`}>
                        <Button title='Save draft' containerStyle={tailwind`w-[45%]`} buttonStyle={tailwind`bg-gray-200`} titleStyle={tailwind`text-gray-700 text-sm font-semibold`} />
                        <Button title='Share' containerStyle={tailwind`w-[45%]`} titleStyle={tailwind`text-sm font-semibold`} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
