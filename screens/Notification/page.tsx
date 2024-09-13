import React from 'react';
import tailwind from 'twrnc';
import { ScrollView, Text, View } from 'react-native';

import NotifCard from './component/NotifCard';
import { INotification } from '../../lib/types';
import BottomNav from '../../components/BottomNav';
import useNotification from './hooks/useNotification';

export default function Notification() {
    const { notifications } = useNotification();

    return (
        <View style={tailwind`flex-1 bg-white`}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={tailwind`flex gap-10 pt-10 pb-20 px-4`}>
                    <View>
                        <Text style={tailwind`text-[16px] font-bold mb-2`}>Today</Text>
                        <View style={tailwind`flex gap-3`}>
                            {
                                notifications?.Today?.map((d: INotification) => (
                                    <NotifCard
                                        type={d?.type}
                                        users={d?.users}
                                        media={d?.media}
                                        comment={d?.comment}
                                        createdAt={d?.createdAt}
                                    />
                                ))
                            }
                        </View>
                    </View>
                    <View>
                        <Text style={tailwind`text-[16px] font-bold mb-2`}>Yesterday</Text>
                        <View style={tailwind`flex gap-3`}>
                            {
                                notifications?.Yesterday?.map((d: INotification) => (
                                    <NotifCard
                                        type={d?.type}
                                        users={d?.users}
                                        media={d?.media}
                                        comment={d?.comment}
                                        createdAt={d?.createdAt}
                                    />
                                ))
                            }
                        </View>
                    </View>
                    <View>
                        <Text style={tailwind`text-[16px] font-bold mb-2`}>Last 7 Days</Text>
                        <View style={tailwind`flex gap-3`}>
                            {
                                notifications?.WEEKLY?.map((d: INotification) => (
                                    <NotifCard
                                        type={d?.type}
                                        users={d?.users}
                                        media={d?.media}
                                        comment={d?.comment}
                                        createdAt={d?.createdAt}
                                    />
                                ))
                            }
                        </View>
                    </View>
                    <View>
                        <Text style={tailwind`text-[16px] font-bold mb-2`}>Last 30 Days</Text>
                        <View style={tailwind`flex gap-3`}>
                            {
                                notifications?.MONTHLY?.map((d: INotification) => (
                                    <NotifCard
                                        type={d?.type}
                                        users={d?.users}
                                        media={d?.media}
                                        comment={d?.comment}
                                        createdAt={d?.createdAt}
                                    />
                                ))
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
            <BottomNav activeNav='Notification' />
        </View>
    )
}
