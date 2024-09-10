import React from 'react'
import tailwind from 'twrnc';
import { TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native-elements';

import SendIcon from "../../../assets/icons/send.svg";
import IGTVIcon from "../../../assets/icons/igtv.svg";
import CamerIcon from "../../../assets/icons/camera.svg";


export default function TopNav() {
    return (
        <View style={tailwind`px-5 pt-2 pb-4`}>
            <View style={tailwind`flex-row justify-between items-center`}>
                <TouchableOpacity>
                    <CamerIcon width={28} height={28} />
                </TouchableOpacity>

                <Image
                    resizeMode='contain'
                    source={require("../../../assets/images/logo.png")}
                    style={tailwind`h-[32px] w-[120px] mt-2`}
                />

                <View style={tailwind`flex-row items-center gap-6`}>
                    <TouchableOpacity>
                        <IGTVIcon width={28} height={28} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SendIcon width={28} height={28} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
