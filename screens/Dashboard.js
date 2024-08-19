import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import logo from '../assets/new-logo-white.png'; 
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Dashboard({ navigation }) {
  
  const [fonts] =useFonts({
    MontReg : require("../assets/fonts/static/Montserrat-Regular.ttf"),
    MontLight : require("../assets/fonts/static/Montserrat-Light.ttf"),
    MontSemiBold : require("../assets/fonts/static/Montserrat-SemiBold.ttf"),
    MontBold : require("../assets/fonts/static/Montserrat-Bold.ttf"),
  });

  if (!fonts)
    return null;

  const [date, setDate] = useState(new Date())
  const [picker, setPicker] = useState(false)
  const [dashdate, setDashdate] = useState('')


  const bgmain =require('../assets/bgmain.png')

  const toggleDate = () => {
    setPicker(!picker);
  };

  const dateChange = ({type}, selectDate) =>{
    if (type == "set") {
        const currentDate = selectDate;
        setDate(currentDate);
        
        if (Platform.OS ==="android"){
            toggleDate();
            setDashDate(currentDate.toDateString());
        }

    } else {
        toggleDate();
    }
  }

  return (
        <SafeAreaView className="flex-1">
        <ScrollView className="bg-white" contentContainerStyle={{paddingBottom:10}} showsVerticalScrollIndicator={false}>
       <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <ImageBackground source={bgmain} className="h-[700px]">
            <View className="flex-1 flex-col relative items-center justify-center">
                <View className="flex-1 flex-col mr-60 mt-10 relative items-center justify center">
                    <View className="flex flex-row relative items-start justify-start">
                        <Image source={logo} className="w-[50px] h-[63px]"></Image>
                        <View className="flex flex-col">
                            <Text style={{fontFamily:'MontSemiBold'}} className="text-white mt-5 ml-2">
                                R I D E
                            </Text>
                            <Text style={{fontFamily:'MontLight'}} className="text-white ml-2 text-[5px]">
                                Passenger Mobile Booking App
                            </Text>
                        </View>
                    </View>
                    <View className="flex flex-col absolute shadow-xl drop-shadow-2xl shadow-gray-900 rounded-xl justify-center items-center bg-white w-[270px] h-[250px] left-20 top-24">
                        {/* <Text style={{fontFamily:"MontReg"}} className="flex mr-32 mb-1">
                            Location
                        </Text> */}
                        <TextInput className="border-gray-500 border bg-white w-[200px] h-[40px] rounded-xl pl-5 mb-5 shadow-xl drop-shadow-xl shadow-gray-900"
                            placeholder='Location'                        
                        />
                        {/* <Text style={{fontFamily:"MontReg"}} className="flex mr-32 mb-1">
                            Location
                        </Text> */}
                        <TextInput className="border-gray-500 border bg-white w-[200px] h-[40px] rounded-xl pl-5 mb-5 shadow-xl drop-shadow-xl shadow-gray-900" 
                            placeholder='Destination'
                        />
                        {/* <Text style={{fontFamily:"MontReg"}} className="flex mr-32 mb-1">
                            Location
                        </Text> */}
                        {!picker && (
                        <Pressable onPress={toggleDate}>
                            <TextInput className="border-gray-500 border bg-white w-[200px] h-[40px] rounded-xl pl-5 shadow-xl drop-shadow-xl shadow-gray-900"
                                placeholder='Select Date'
                                value={dashdate}
                                onChange={setDashdate}
                                editable={false}
                            />
                        </Pressable>
                        )}
                        {picker && (
                        <DateTimePicker 
                            mode="date"
                            display="spinner"
                            value={date}
                            onChange={dateChange}
                        />
                        )}
                        <TouchableOpacity className="bg-[#03314B] rounded-2xl mt-4 h-10 w-32 items-center justify-center">
                            <Text style={{fontFamily:'MontReg'}} className="text-white">
                                Search Buses
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1 flex-col justify-center items-center mt-20 relative">
                        <Text style={{fontFamily:'MontSemiBold'}} className="text-[#03314B] text-lg">
                            Popular Routes
                        </Text>
                        <View className="flex flex-row justify-center items-center relative left-10">
                            <TouchableOpacity className="bg-slate-600 w-[200px] h-[50px] mt-4 rounded-xl items-center justify-center">
                            <Text>
                                Camp Phillips
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            <StatusBar style="light" />
            </View>

            </ImageBackground>
      </KeyboardAvoidingView>
      </ScrollView>
      </SafeAreaView>
  );
}