import React from 'react';
import tailwind from 'twrnc';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import { TouchableOpacity, Text } from 'react-native';
import { Icon, Image } from 'react-native-elements';

import Avatar from '../Avatar';
import { IPost, Media } from '../../lib/types';
import LoveIcon from "../../assets/icons/love.svg";
import SaveIcon from "../../assets/icons/save.svg";
import SendIcon from "../../assets/icons/send.svg";
import CommentIcon from "../../assets/icons/comment.svg";

export default function Post({ user, location, image, likes, comments }: IPost) {
    return (
        <View style={tailwind``}>
            <View style={tailwind`px-3 py-1 flex-row justify-between items-center`}>
                <View style={tailwind`flex-row items-center gap-2`}>
                    <Avatar size='sm' profile_url={"https://images.ctfassets.net/az3stxsro5h5/24L2UM6hV3m4csMvBzkHbj/9d4583541bdb29ae0c6a9ff2b60f1313/After.jpeg?w=2389&h=2986&fl=progressive&q=50&fm=jpg"} />
                    <View>
                        <Text style={tailwind`font-semibold`}>{user?.username}</Text>
                        <Text style={tailwind`text-[12px] mt-[2px]`}>{location?.name}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Icon
                        name='ellipsis-h'
                        type='font-awesome-5'
                        iconStyle={{ fontSize: 20 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={tailwind`h-[400px] w-full`}>
                <Swiper showsButtons={false} dotColor='white' activeDotStyle={tailwind`relative top-14`} dotStyle={tailwind`bg-gray-400 relative top-14`}>
                    {
                        image?.map((d: Media, i: number) => (
                            <View key={i.toString()}>
                                <Image
                                    resizeMode='cover'
                                    style={tailwind`w-full h-full`}
                                    source={{ uri: d?.url }}
                                />
                            </View>
                        ))
                    }
                </Swiper>
            </View>

            <View style={tailwind`pl-4 pr-5 py-3 flex-row justify-between items-center`}>
                <View style={tailwind`flex-row gap-5 items-center`}>
                    <TouchableOpacity>
                        <LoveIcon />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CommentIcon />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SendIcon />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <SaveIcon />
                </TouchableOpacity>
            </View>

            <View style={tailwind`px-5`}>
                <Text>Liked by <Text style={tailwind`font-semibold`}>Ram grg</Text> and <Text style={tailwind`font-semibold`}>{likes?.count ?? 0} others.</Text></Text>
                <View style={tailwind`mt-2 flex-row gap-2`}>
                    <Text style={tailwind`font-semibold`}>{comments?.list?.[0]?.user?.username}</Text>
                    <Text>{comments?.list?.[0]?.text}</Text>
                </View>
            </View>
        </View>
    )
}
