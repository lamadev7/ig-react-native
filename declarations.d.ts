declare module '*.svg' {
  import * as React from 'react';
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module 'react-native-masonry-list';
declare module 'humanize-duration';
declare module 'expo-image-manipulator';