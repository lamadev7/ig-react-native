import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView, View } from 'react-native';
import BottomNav from '../../components/BottomNav';
import tailwind from 'twrnc';

export default function Search() {
    return (
        <SafeAreaView style={tailwind`flex-1`}>
            <View style={tailwind`flex-1`}>
                <Text>Search page</Text>
                <BottomNav activeNav='Search' />
            </View>
        </SafeAreaView>
    )
}
