import React from 'react';
import tailwind from 'twrnc';
import { View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

export default function AddPostSkeleton() {
    return (
        <View style={tailwind`flex gap-[2px]`}>
            <View style={tailwind`flex-row justify-center gap-[2px]`}>
                <View style={tailwind`flex-row justify-end h-[200px] w-[33%] bg-zinc-900`}>
                    <CheckBox
                        iconType="material"
                        checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                        uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="gray" />}
                    />
                </View>
                <View style={tailwind`flex-row justify-end h-[200px] w-[33%] bg-zinc-900`}>
                    <CheckBox
                        iconType="material"
                        checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                        uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="gray" />}
                    />
                </View>
                <View style={tailwind`flex-row justify-end h-[200px] w-[33%] bg-zinc-900`}>
                    <CheckBox
                        iconType="material"
                        checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                        uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="gray" />}
                    />
                </View>
            </View>
            <View style={tailwind`flex-row justify-center gap-[2px]`}>
                <View style={tailwind`flex-row justify-end h-[200px] w-[33%] bg-zinc-900`}>
                    <CheckBox
                        iconType="material"
                        checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                        uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="gray" />}
                    />
                </View>
                <View style={tailwind`flex-row justify-end h-[200px] w-[33%] bg-zinc-900`}>
                    <CheckBox
                        iconType="material"
                        checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                        uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="gray" />}
                    />
                </View>
                <View style={tailwind`flex-row justify-end h-[200px] w-[33%] bg-zinc-900`}>
                    <CheckBox
                        iconType="material"
                        checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                        uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="gray" />}
                    />
                </View>
            </View>
            <View style={tailwind`flex-row justify-center gap-[2px]`}>
                <View style={tailwind`flex-row justify-end h-[200px] w-[33%] bg-zinc-900`}>
                    <CheckBox
                        iconType="material"
                        checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                        uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="gray" />}
                    />
                </View>
                <View style={tailwind`flex-row justify-end h-[200px] w-[33%] bg-zinc-900`}>
                    <CheckBox
                        iconType="material"
                        checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                        uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="gray" />}
                    />
                </View>
                <View style={tailwind`flex-row justify-end h-[200px] w-[33%] bg-zinc-900`}>
                    <CheckBox
                        iconType="material"
                        checkedIcon={<Icon name="radio-button-checked" type="material" size={30} color="white" />}
                        uncheckedIcon={<Icon name="radio-button-unchecked" type="material" size={30} color="gray" />}
                    />
                </View>
            </View>
        </View>
    )
}
