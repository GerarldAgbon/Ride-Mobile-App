import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import logo from '../assets/new-logo-teal.png'; 
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Dashboard({ navigation }) {
  
  const [fonts] =useFonts({
    MontReg : require("../assets/fonts/static/Montserrat-Regular.ttf"),
    MontLight : require("../assets/fonts/static/Montserrat-Light.ttf"),
    MontSemiBold : require("../assets/fonts/static/Montserrat-SemiBold.ttf"),
    MontBold : require("../assets/fonts/static/Montserrat-Bold.ttf"),
  });

  if (!fonts)
    return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');

  return (
        <SafeAreaView className="flex-1">
        <ScrollView className="bg-white" contentContainerStyle={{paddingBottom:10}} showsVerticalScrollIndicator={false}>
       <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View className="flex-1 flex-col bg-[#ffffff] items-center justify-center mt-8">
                <View className="flex flex-col mr-[330px]">
                <Icon.Button name="arrow-back" backgroundColor="white" color="#03314B" size={30} className="items-start" onPress={() => navigation.navigate('Splashscreen')}></Icon.Button>
                </View>
                <View className="flex flex-col relative items-center justify-center">
                <Image source={logo} className="w-[100px] h-[130px] opacity-50 mb-2"></Image>
                <View className="flex flex-col mb-[160px] items-center justify-center">
                    <Text style={{ fontFamily: 'MontBold'}}className="text-[#03314B] text-[40px] pl-4">LET'S SIGN</Text>
                    <Text style={{ fontFamily: 'MontBold'}}className="text-[#03314B] text-[40px] pl-4">YOU IN</Text>
                    <View className="flex felx-col mt-12 items-center">
                    <Text style={{ fontFamily: 'MontReg'}}className="text-[#03314B] text-m absolute bottom-1">Enter your </Text>
                    <Text style={{ fontFamily: 'MontReg'}}className="text-[#03314B] text-m absolute top">Username and Password</Text>
                    </View>
                </View>
                </View>
                <View className="flex flex-col relative items-center"> 
                <TextInput className="border-1 w-[300px] h-[50px] pl-3 rounded-xl bg-[#e6ebed] text-[#03314B] items-center justify-center absolute bottom-[120px]" 
                    placeholder='Enter Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput className="border-1 w-[300px] h-[50px] pl-3 rounded-xl bg-[#e6ebed] text-[#03314B] items-center justify-center absolute bottom-[50px]" 
                    placeholder='Enter Password'
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <View className="flex flex-row justify-center items-center">
                  <Text className="mr-3 text-xs"style={{ fontFamily: 'MontSemiBold'}}>
                    Sign in with:
                  </Text>
                  <FontIcon.Button name='facebook' className="bg-[#3b5998]"
                  onPress={() => navigation.navigate('Splashscreen')}
                  > Facebook</FontIcon.Button>

                  <View className="mr-2"></View>
                  <FontIcon.Button name='google' className="bg-[#0F9D58]"
                  onPress={() => navigation.navigate('Splashscreen')}
                  > Google</FontIcon.Button>
                </View>
                  <View className="flex flex-col relative justify-center items-center">
                    <TouchableOpacity className="border-1 w-[200px] h-[50px] rounded-xl bg-[#03314B] opacity-95 text-white items-center justify-center absolute top-5"
                    onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={{ fontFamily: 'MontBold'}} className="text-white text-xl">LOG IN</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="flex relative mt-20 justify-center items-center">
                  <Text className="text-[10px]">
                    By logging in, you agree to our Terms of Service and Privacy Policy.
                  </Text>
                </View>
                <StatusBar style="dark" />
            </View>
      </KeyboardAvoidingView>
      </ScrollView>
      </SafeAreaView>
  );
}