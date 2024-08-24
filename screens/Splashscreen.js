import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View, Button } from 'react-native';
import location from '../assets/3D-location.png';
import { useFonts } from 'expo-font';

export default function SplashScreen({ navigation }) {
  
  const [fonts] =useFonts({
    MontReg : require("../assets/fonts/static/Montserrat-Regular.ttf"),
    MontLight : require("../assets/fonts/static/Montserrat-Light.ttf"),
    MontSemiBold : require("../assets/fonts/static/Montserrat-SemiBold.ttf"),
    MontBold : require("../assets/fonts/static/Montserrat-Bold.ttf"),
    OpensansReg : require("../assets/fonts/static/OpenSans-Regular.ttf"),
    OpensansMed : require("../assets/fonts/static/OpenSans-Medium.ttf"),
    OpensansSemiBold : require("../assets/fonts/static/OpenSans-SemiBold.ttf"),
    OpensansBold : require("../assets/fonts/static/OpenSans-Bold.ttf"),
    OpensansExtraBold : require("../assets/fonts/static/OpenSans_SemiCondensed-ExtraBold.ttf"),
  });

  if (!fonts)
    return null;

  return (
    <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <View className="flex-1 flex-col bg-[#ffffff] items-center justify-center">
        <View className="flex flex-col items-center justify-center relative pb-[200px]">
          <Image source={location} className="justify-center h-[200px] w-[170px]"></Image>
          <Text className='justify-center text-2xl font-extrabold'>{'Share you location with us for \n   a better travel experience!'}</Text>
          <Text className='justify-center text-xs mt-2 opacity-50'>Turn on Location Services in Setting</Text>
          <Text className='justify-center text-xs opacity-50'>or enter your address manually to find bus near you.</Text>
        </View>
        <View classname="flex flex-col-reverse jusitfy">
          <TouchableOpacity className="border-1 w-[350px] h-10 rounded-xl bg-[#006FFD] opacity-95 text-white items-center justify-center"
          onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontFamily: 'OpensansExtraBold'}} className="text-white text-m">Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mt-3 border-2 w-[350px] h-10 rounded-xl border-blue-700 bg-white items-center justify-center"
          onPress={() => navigation.navigate('Registration')}>
            <Text style={{ fontFamily: 'OpensansExtraBold'}} className="text-[#006FFD] text-m">Enter Address Manually</Text>
          </TouchableOpacity>
        </View>
        {/* <View className="flex flex-row relative items-center justify-center mb-24">
          <Image source={logo} className="w-[400px] h-[430px] opacity-50 mr-[10px]"></Image>
          <View className="flex flex-col mt-[50px]">
            <Text style={{ fontFamily: 'MontBold'}}className="text-[#03314B] text-[45px] mr-[111px]">Welcome</Text>
            <Text style={{ fontFamily: 'MontBold'}}className="text-[#03314B] text-[45px] mr-[111px]">Aboard!</Text>
            <View className="flex felx-col mt-20">
              <Text style={{ fontFamily: 'MontLight'}}className="text-[#03314B] text-2xl absolute -left-10 bottom-1">Start your commuting</Text>
              <Text style={{ fontFamily: 'MontLight'}}className="text-[#03314B] text-2xl absolute top -left-5">journey with RIDE!</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-col relative">
          <TouchableOpacity className="border-1 w-[250px] h-[50px] rounded-xl bg-[#03314B] opacity-95 text-white items-center justify-center absolute -left-[100px] bottom-[50px]"
          onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontFamily: 'MontBold'}} className="text-white text-xl">LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-1 w-[250px] h-[50px] rounded-xl bg-[#03314B] opacity-95 text-white items-center justify-center absolute -left-[100px] bottom-[-10px]"
          onPress={() => navigation.navigate('Registration')}>
            <Text style={{ fontFamily: 'MontBold'}} className="text-white text-xl">REGISTER</Text>
          </TouchableOpacity>
        </View> */}
        <StatusBar style="dark" />
      </View>
    </KeyboardAvoidingView> 
  );
}