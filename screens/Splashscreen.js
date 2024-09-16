import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View, Button } from 'react-native';
import pinlocation from '../assets/3D-location.png';
import { useFonts } from 'expo-font';
import * as Location from 'expo-location';

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
        <View className="flex flex-col items-center justify-center relative pb-[350px]">
          <Image source={pinlocation} className="justify-center h-[200px] w-[170px]"></Image>
          <Text className='justify-center text-3xl font-extrabold'>{'Share you location with us for \n   a better travel experience!'}</Text>
          <Text className='justify-center text-lg mt-2 opacity-50'>Turn on Location Services in Settings</Text>
          <Text className='justify-center text-lg opacity-50'>to find buses near you.</Text>
        </View>
        <View classname="flex flex-col-reverse jusitfy">
          <TouchableOpacity className="border-1 w-[350px] h-10 rounded-xl bg-[#006FFD] opacity-95 text-white items-center justify-center"
          onPress={() => navigation.navigate('UserLocation')}> 
            <Text style={{ fontFamily: 'OpensansExtraBold'}} className="text-white text-m">Turn On Location Services</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity className="mt-3 border-2 w-[350px] h-10 rounded-xl border-blue-700 bg-white items-center justify-center"
          onPress={() => navigation.navigate('Registration')}>
            <Text style={{ fontFamily: 'OpensansExtraBold'}} className="text-[#006FFD] text-m">Enter Address Manually</Text>
          </TouchableOpacity> */}
        </View>
        <StatusBar style="dark" />
      </View>
    </KeyboardAvoidingView> 
  );
}