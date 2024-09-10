import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import tailwind from 'twrnc';
import BottomNav from './components/BottomNav';
import Search from './screens/Search/page';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaView style={tailwind`flex-1`}>
        <KeyboardAvoidingView
          style={tailwind`flex-1`}
          behavior={Platform.OS === 'ios' ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -69 : 0}
        >
          <Stack.Navigator>
            {
              false && (
                <Stack.Screen
                  name='Login'
                  component={Login}
                  options={{ headerShown: false }}
                />
              )
            }
            <Stack.Screen
              name='Home'
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Search'
              component={Search}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </NavigationContainer>
  );
}
