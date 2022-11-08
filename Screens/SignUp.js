import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function SignUp({navigation}) {
  
  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const SignUpBtn = () => {
      fetch("http://10.0.2.2:4000/User")
        .then(res => res.json())
        .then( (data) => { 
          console.log(data)
        })
     fetch("http://10.0.2.2:4000/User/signUp", {
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
        .then( (data) => { 
          console.log(data)
        }) 
          // console.log(data)
    //       try {
    //         await AsyncStorage.setItem('token', data.token)
    //       } catch (e) {
    //         console.log(e);
    //       }

    //       // if (data.token == true) {
    //       //   // navigation.replace('HomeScreen')
    //       //   console.log("Good")
            
    //       // }
    //     })
  }
  


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/1.jpg')} resizeMode="cover" style={styles.BGimage} >

        <StatusBar style="auto" />
        <View style={styles.header}>
          {/* <KeyboardAvoidingView behavior='position'> */}
          <Text style={styles.headerTxt}> Create Account </Text>
          {/* <TextInput
            mode="Flat"
            label="Username"
            style={styles.inputUsername}
            value={username}
            onChangeText={(text) => setUsername(text)}
            /> */}
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
          {/* </KeyboardAvoidingView> */}

          <Button
            style={styles.Btn}
            icon="shield-check" mode="contained"
            onPress={() => SignUpBtn()} >
            SignUp
          </Button>

          <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.navigate('SignIn')}>
            <Text style={{fontWeight: "bold"}}> Already have an account..!</Text>
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
  touchableOpacity: {
    marginTop: 10,
    marginLeft: 10,

  },
});
