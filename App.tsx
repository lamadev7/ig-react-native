import tailwind from 'twrnc';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import AddPost from './screens/AddPost';
import AddStory from './screens/AddStory';
import Search from './screens/Search/page';
import { SCREEN_NAMES } from './lib/constants';
import Notification from './screens/Notification/page';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        style={tailwind`flex-1`}
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -69 : 0}
      >
        <Stack.Navigator>
          {
            false && (
              <Stack.Screen
                name={SCREEN_NAMES.LOGIN}
                component={Login}
                options={{ headerShown: false }}
              />
            )
          }
          <Stack.Screen
            name={SCREEN_NAMES.HOME}
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.SEARCH}
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.NOTIFICATION}
            component={Notification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ADD_POST}
            component={AddPost}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.ADD_STORY}
            component={AddStory}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
