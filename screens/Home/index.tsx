

import React from 'react';
import { SafeAreaView } from 'react-native';

import TopNav from './component/TopNav';
import StorySlider from './component/StorySlider';
import useHome from './hooks/useHome';
import tailwind from 'twrnc';

export default function Home() {
  const { latestStories } = useHome();
  return (
    <SafeAreaView style={tailwind`bg-white`}>
      <TopNav />
      <StorySlider data={latestStories} />
    </SafeAreaView>
  )
}
