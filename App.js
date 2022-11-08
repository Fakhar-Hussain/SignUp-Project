import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUp from "./Screens/SignUp"
import SignIn from "./Screens/Sign-in"
// import HomeScreen from "./Screens/HomeScreen"
// import { useEffect } from 'react/cjs/react.production.min';

const Stack = createNativeStackNavigator();

function App() {
  // const [Login, setLogin] = useState(false);

  // useEffect(() => {
  //   const token = AsyncStorage.getItem('token');
  //   if (token) {
  //     setLogin(true)
  //     // navigation.replace('HomeScreen')
  //     // console.log("You are in...")
  //   } else {
  //     setLogin(false)
  //     // navigation.replace('SignIn')
  //   }

  // }, [])

  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

