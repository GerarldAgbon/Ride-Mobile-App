import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Location from 'expo-location';

export default function UserLocation({ navigation }) {
    const [mapRegion, setMapRegion] = useState({
        latitude: 8.320133334976306,
        longitude: 124.79756552960811,
        latitudeDelta: 0.009,
        longitudeDelta: 0.011,
    });
    const [errorMsg, setErrorMsg] = useState();

    const userLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status != 'granted') {
            setErrorMsg('Permission to access location was denied');
        }
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.009,
            longitudeDelta: 0.011,
        });
        console.log(location.coords.latitude, location.coords.longitude);
    }

    useEffect(() => {
        userLocation();
    }, []);

  return (
    <View className='flex'>
      <MapView className='w-full, h-full' 
        region={mapRegion} >
            <Marker coordinate={mapRegion} title='Marker'/>
        </MapView>
        <View className='items-center'>
          <TouchableOpacity className="absolute bottom-10 border-2 w-[50%] h-12 rounded-xl border-white bg-[#006FFD] items-center justify-center z-10"
            onPress={() => navigation.navigate('Registration')}>
               <Text style={{ fontFamily: 'OpensansExtraBold'}} className="text-white text-xl">SET LOCATION</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
