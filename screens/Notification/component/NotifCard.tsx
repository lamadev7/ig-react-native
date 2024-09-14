import React from 'react';
import tailwind from 'twrnc';
import humanizeDuration from "humanize-duration";
import { Avatar, Button } from 'react-native-elements';
import { Text, TouchableOpacity, View } from 'react-native';

import useNotifCard from '../hooks/useNotifCard';
import { INotification } from '../../../lib/types';
import { NOTIF_EVENT_TYPE_ENUM } from '../../../lib/constants';

export default function NotifCard({ type, users, media, comment, createdAt }: INotification) {
    const { handleFollowBack } = useNotifCard();

    return (
        <View style={tailwind``}>
            <TouchableOpacity>
                {
                    type === NOTIF_EVENT_TYPE_ENUM.BULK_LIKE && (
                        <View style={tailwind`w-full flex-row items-center justify-between`}>
                            {
                                users?.length > 0 && (
                                    <View style={tailwind`w-[15%] flex-row items-center`}>

                                        <Avatar
                                            rounded
                                            size={33}
                                            source={{ uri: users?.[0]?.profile_url }}
                                        />
                                        <Avatar
                                            containerStyle={tailwind`-ml-5 mt-5`}
                                            rounded
                                            size={33}
                                            source={{ uri: users?.[1]?.profile_url }}
                                        />
                                    </View>
                                )
                            }
                            <View style={[tailwind`mt-1 w-[70%] flex-row flex-wrap items-center`, { height: 'fit-content' }]}>
                                <Text style={tailwind`font-semibold`}>{users?.[0]?.username}</Text>
                                <Text>{users?.length == 2 ? ' and ' : ','}</Text>
                                <Text style={tailwind`font-semibold`}>{users?.[1]?.username}</Text>
                                <Text>
                                    {users?.length !== 2 ? `and ${(users?.length - 2) ?? ''} others liked your reel.` : 'liked your reel.'}

                                    <Text style={tailwind`text-gray-500`}> {humanizeDuration(createdAt, { units: ["s", "m", "d", "h"] })}</Text>
                                </Text>
                            </View>
                            <View style={tailwind`w-[15%] flex-row justify-end`}>
                                <Avatar
                                    size={40}
                                    avatarStyle={tailwind`rounded-md`}
                                    source={{ uri: media?.url }}
                                />
                            </View>
                        </View>
                    )
                }

                {
                    type === NOTIF_EVENT_TYPE_ENUM.LIKE && (
                        <View style={tailwind`w-full flex-row items-center justify-between`}>
                            <View style={tailwind`w-[15%] flex-row items-center`}>
                                <Avatar
                                    rounded
                                    size={40}
                                    source={{ uri:  users?.[0]?.profile_url}}
                                />
                            </View>
                            <View style={[tailwind`mt-1 w-[70%] flex-row flex-wrap items-center`, { height: 'fit-content' }]}>
                                <Text style={tailwind`font-semibold`}>{users?.[0]?.username} </Text>
                                <Text>
                                    liked your reel.
                                    <Text style={tailwind`text-gray-500`}> {humanizeDuration(createdAt, { units: ["s", "m", "d", "h"] })}</Text>
                                </Text>
                            </View>
                            <View style={tailwind`w-[15%] flex-row justify-end`}>
                                <Avatar
                                    size={40}
                                    avatarStyle={tailwind`rounded-md`}
                                    source={{ uri: media?.url }}
                                />
                            </View>
                        </View>
                    )
                }

                {
                    type === NOTIF_EVENT_TYPE_ENUM.COMMENT && (
                        <View style={tailwind`w-full flex-row items-center justify-between`}>
                            <View style={tailwind`w-[15%] flex-row items-center`}>
                                <Avatar
                                    rounded
                                    size={40}
                                    source={{ uri: users?.[0]?.profile_url }}
                                />
                            </View>
                            <View style={[tailwind`mt-1 w-[70%] flex-row flex-wrap items-center`, { height: 'fit-content' }]}>
                                <Text style={tailwind`font-semibold`}>{users?.[0]?.username} </Text>
                                <Text>commented: </Text>
                                <Text>{comment ?? ''}</Text>
                                <Text style={tailwind`text-gray-500`}> {humanizeDuration(createdAt, { units: ["s", "m", "d", "h"] })}</Text>
                            </View>
                            <View style={tailwind`w-[15%] flex-row justify-end`}>
                                <Avatar
                                    size={40}
                                    avatarStyle={tailwind`rounded-md`}
                                    source={{ uri: media?.url }}
                                />
                            </View>
                        </View>
                    )
                }

                {
                    type === NOTIF_EVENT_TYPE_ENUM.FOLLOW_REQUEST && (
                        <View style={tailwind`w-full flex-row items-center justify-between`}>
                            <View style={tailwind`w-[10%] flex-row items-center`}>
                                <Avatar
                                    rounded
                                    size={40}
                                    source={{ uri: users?.[0]?.profile_url }}
                                />
                            </View>
                            <View style={[tailwind`mt-1 w-[50%] flex-row flex-wrap justify-start items-start`, { height: 'fit-content' }]}>
                                <Text style={tailwind`flex-row`}>
                                    <Text style={tailwind`font-semibold`}>{users?.[0]?.username} </Text>
                                    started following you. <Text style={tailwind`text-gray-500`}>1d</Text>
                                </Text>
                            </View>
                            <View style={tailwind`w-[30%]`}>
                                <Button
                                    type='solid'
                                    title="Follow"
                                    titleStyle={tailwind`text-sm`}
                                    buttonStyle={tailwind`px-5 py-1 rounded-md`}
                                    onPress={() => handleFollowBack(users?.[0]?.id)}
                                />
                            </View>
                        </View>
                    )
                }
            </TouchableOpacity>
        </View>
    )
}
