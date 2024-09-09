

import React from 'react';
import tailwind from 'twrnc';
import { Button, Icon, Image } from 'react-native-elements';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import useLogin from './hooks/useLogin';

export default function Login() {
  const { form, handleChange, handleLoginWithFacebook, handleRedirect, } = useLogin();

  return (
    <SafeAreaView>
      <ScrollView style={tailwind`h-full p-5`}>
        <View style={tailwind`flex-row`}>
          <Icon type='font-awesome-5' name='chevron-left' />
        </View>
        <View style={tailwind`flex justify-center items-center h-[700px] w-full`}>
          <Image source={require("../../assets/images/logo.png")} resizeMode='contain' style={tailwind`h-45 w-45`} />
          <View style={tailwind`flex w-full gap-5`}>
            <TextInput
              autoFocus
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              placeholder='Email or Phone number'
              onChangeText={(e: any) => handleChange("email", e)}
              style={tailwind`border-[0.5px] border-gray-300 py-4 px-5 w-full bg-[#FAFAFA] rounded-md`}
            />
            <TextInput
              autoFocus
              autoCapitalize='none'
              placeholder='Password'
              secureTextEntry={true}
              textContentType='password'
              onChangeText={(e: any) => handleChange("password", e)}
              style={tailwind`border-[0.5px] border-gray-300 py-4 px-5 w-full bg-[#FAFAFA] rounded-md`}
            />

            <TouchableOpacity onPress={() => handleRedirect('forget-password')}>
              <View style={tailwind`flex-row justify-end`}>
                <Text style={tailwind`text-[#3797EF]`}>Forgot password?</Text>
              </View>
            </TouchableOpacity>

            <Button
              title='Log in'
              disabledStyle={tailwind`bg-blue-200`}
              disabledTitleStyle={tailwind`text-white`}
              disabled={!form?.email || !form?.password}
              buttonStyle={tailwind`border-0 py-3 text-white bg-[#3797EF]`}
            />

            <TouchableOpacity onPress={handleLoginWithFacebook}>
              <View style={tailwind`my-5 flex-row justify-center items-center gap-4`}>
                <Icon type='font-awesome' name='facebook-square' color="#3797EF" />
                <Text style={tailwind`text-lg text-[#3797EF]`}>Log in with Facebook</Text>
              </View>
            </TouchableOpacity>

            <View style={tailwind`my-5 flex-row justify-center items-center gap-4`}>
              <View style={tailwind`w-[200px] border-[0.2px] border-gray-300`}></View>
              <Text style={tailwind`text-gray-400 px-5`}>OR</Text>
              <View style={tailwind`w-[200px] border-[0.2px] border-gray-300`}></View>
            </View>

            <View style={tailwind`my-5 flex-row justify-center items-center gap-2`}>

              <Text style={tailwind`text-gray-500 text-lg`}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => handleRedirect('sign-up')}>
                <Text style={tailwind`text-lg text-[#3797EF]`}>Sign Up.</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
