import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/Splashscreen';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Dashboard from './screens/Dashboard';
import UserLocation from './screens/UserLocation';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splashscreen'>
        <Stack.Screen name="Splashscreen" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
        <Stack.Screen name="UserLocation" component={UserLocation} options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}