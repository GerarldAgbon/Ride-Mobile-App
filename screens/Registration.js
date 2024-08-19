import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import logo from '../assets/new-logo-teal.png'; 
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

export default function Registration({ navigation }) {
    
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

  const bg =require("../assets/imgbg.png");

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="bg-white" contentContainerStyle={{paddingBottom:0}} showsVerticalScrollIndicator={false}>
       <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <ImageBackground source={bg} className="h-[700px]">
            <View className="flex flex-col mr-[350px] mt-8">
                <Icon.Button name="arrow-back" backgroundColor="white" color="#03314B" size={30} className="items-start" onPress={() => navigation.navigate('Splashscreen')}></Icon.Button>
            </View>
            <View className="flex flex-col relative items-center justify-center">
                <Image source={logo} className="w-[80px] h-[90px] mb-2" />
                <Text style={{fontFamily: 'MontBold'}} className="text-[#03314B] text-4xl">
                    RIDE
                </Text>
                <Text style={{fontFamily: 'MontReg'}} className="text-[#03314B] text-m">
                    Passenger Mobile Booking App
                </Text>
            </View>
            <View className="flex flex-col mt-10 items-center justify-center relative">
                <Text style={{fontFamily:'MontSemiBold'}} className="text-[#03314B] text-xl">
                    REGISTER YOUR INFORMATION
                </Text>
                <Text style={{fontFamily:'MontReg'}} className="text-[#03314B] text-xs">
                   Fill up your personal information for seamless experience
                </Text>
            </View>
            <View className="flex flex-col justify-center items-center relative mt-7">
                <Text style={{fontFamily:'MontReg'}} className="mr-[260px] mb-2 text-[#03314B]">
                    Full Name
                </Text>
                <TextInput className="border-blue-900 border w-[350px] h-[40px] pl-3 rounded-xl bg-white text-[#03314B] items-center justify-center" 
                placeholder='Full Name Goes Here'
                />
            </View>
            <View className="flex flex-row items-center relative mt-4">
                <View className="flex relative ml-8">
                <Text style={{fontFamily:'MontReg'}} className="ml-1 mb-2 text-[#03314B]">
                    Email
                </Text>
                <TextInput className="border-blue-900 border w-[170px] h-[40px] pl-3 rounded-xl bg-white text-[#03314B] items-center justify-center" 
                placeholder='Email Goes Here'
                value={email}
                onChangeText={setEmail}
                />
                </View>
                <View className="mr-5"></View>
                <View className="flex relative">
                <Text style={{fontFamily:'MontReg'}} className="ml-1 mr-56 mb-2 text-[#03314B]">
                    Password
                </Text>
                <TextInput className="border-blue-900 border w-[160px] h-[40px] pl-3 rounded-xl bg-white text-[#03314B] items-center justify-center" 
                placeholder='Pasword Goes Here'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                />
                </View>
            </View>
            <View className="flex flex-col justify-center items-center relative mt-4">
                <Text style={{fontFamily:'MontReg'}} className="mr-[230px] mb-2 text-[#03314B]">
                    Current Adress
                </Text>
                <TextInput className="border-blue-900 border w-[350px] h-[40px] pl-3 rounded-xl bg-white text-[#03314B] items-center justify-center" 
                placeholder='Address Goes Here'
                />
            </View>
            <View className="flex flex-col items-center justify-center relative">
                <TouchableOpacity className="mt-5 border-1 w-[150px] h-[40px] rounded-xl bg-[#03314B] opacity-95 text-white justify-center items-center"
                onPress={() => navigation.navigate('Login')}>
                    <Text style={{fontFamily:'MontSemiBold'}} className="text-white text-xl">
                        Register
                    </Text>
                </TouchableOpacity> 
            </View>
            <View className="justify-center items-center mt-3">
                <Text className="text-xs">
                    By registering, you agree to our Terms of Service and Privacy Policy.
                </Text>
            </View>
        </ImageBackground>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}