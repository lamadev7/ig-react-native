

import React from 'react';
import tailwind from 'twrnc';
import { SafeAreaView, ScrollView } from 'react-native';

import useHome from './hooks/useHome';
import Posts from './component/Posts';
import TopNav from './component/TopNav';
import StorySlider from './component/StorySlider';
import BottomNav from '../../components/BottomNav';

export default function Home() {
  const { latestStories } = useHome();

  return (
    <SafeAreaView style={tailwind`bg-white`}>
      <ScrollView>
        <TopNav />
        <StorySlider data={latestStories} />
        <Posts />
      </ScrollView>
      <BottomNav activeNav="Home" />
    </SafeAreaView>
  )
}
