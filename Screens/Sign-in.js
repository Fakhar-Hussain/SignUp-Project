import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SignIn({navigation}) {

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const SignInComponent = () => {

    fetch("http://10.0.2.2:4000/User/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      })
        .then(res => res.json())
        .then( async (data) => { 
          console.log(data)
          try {
            await AsyncStorage.getItem('token')
            // await AsyncStorage.setItem('token2', data.name)
            // .then(navigation.replace('HomeScreen'))
            
          } catch (e) {
            console.log('error hai bhai',e);
          }
          // if (data.token == true) {
          //   navigation.replace('HomeScreen')
            
          // }
        })
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/1.jpg')} resizeMode="cover" style={styles.BGimage} >

        <StatusBar style="auto" />
        <View style={styles.header}>
          <Text style={styles.headerTxt}> Sign-in </Text>
          
          <TextInput
            mode="Flat"
            label="Email"
            style={styles.inputEmail}
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
          <TextInput
            mode="Flat"
            label="Password"
            style={styles.inputPassword}
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            />

          <Button
            style={styles.Btn}
            icon="shield-check" mode="contained"
            onPress={() => SignInComponent() }>
            Sign-In
          </Button>

          <TouchableOpacity style={styles.BtnSignUp} onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontWeight: "bold"}}> I don't have an account..!</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    zIndex: 2,
    marginTop: "8%",
    marginHorizontal: "6%",
    justifyContent: 'center',
  },
  BGimage: {
    zIndex: 1,
    width: "100%",
    height: "100%"
  },
  headerTxt: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: "14%",
    color: "#fff",
    textAlign: "center"
  },
  inputUsername: {
    marginTop: 20,
  },
  inputEmail: {
    marginTop: 10,
  },
  inputPassword: {
    marginTop: 10,
  },
  Btn: {
    marginTop: 40,
    height: "12%",
    justifyContent: "center",
    backgroundColor: "#02ceed"
  },
  BtnSignUp: {
    marginTop: "4%",
    marginLeft: 10,
    width: 165,
    height: 30,
    justifyContent: "center"
  },
});
