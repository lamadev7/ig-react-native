import React from 'react'
import tailwind from 'twrnc';
import { View } from 'react-native';

import { IPost } from '../../../lib/types';
import Post from '../../../components/Post';
import { instagramPosts } from '../../../lib/constants';

export default function Posts() {
    return (
        <View style={tailwind`flex gap-6`}>
            {
                instagramPosts?.map((d: IPost, i: number) => (
                    <Post
                        id={d?.id}
                        user={d?.user}
                        image={d?.image}
                        likes={d?.likes}
                        comments={d?.comments}
                        location={d?.location}
                    />
                ))
            }
        </View>
    )
}
