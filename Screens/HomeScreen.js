// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
// import { Button } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function HomeScreen ({navigation}) {
    
//     // useEffect(() => {
//     //     const token = AsyncStorage.getItem('token');
//     //     if (token) {
        
//     //     } else {
            
//     //     }
    
//     // }, [])


//     // const SignInComponent = async () => {

//     //   fetch("http://10.0.2.2:4000/User/signIn", {
//     //       method: "POST",
//     //       headers: {
//     //         "Content-Type": "application/json"
//     //       },
//     //       body: JSON.stringify({
//     //         'email': email,
//     //         'password': password
//     //       })
//     //     })
//     //       .then(res => res.json())
//     //       .then( async (data) => { 
//     //         console.log(data)
//     //         try {
//     //           await AsyncStorage.getItem('token')
//     //           .then(navigation.replace('HomeScreen'))
              
//     //         } catch (e) {
//     //           console.log('error hai bhai',e);
//     //         }
//     //       })
//     // }


//   const UserScreen = async () => {
//     //  let user = await AsyncStorage.getItem('token2')
//     //  console.log(user);
//      await AsyncStorage.removeItem('token').then(() => {
//          navigation.replace('SignUp')
//      })
//   }

//     const logout = () => {
//     }

//     return (
//     <View style={styles.container}>

//         <StatusBar style="auto" />
//         <View style={styles.header}>
//           <Text style={styles.headerTxt}> Welcome Home </Text>  
          
//           {/* <Text>{user}</Text> */}

//           <Button
//             style={styles.Btn}
//             icon="shield-check" mode="contained"
//             onPress={() => UserScreen()}>
//             Sign-Out
//           </Button>
        
//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: "center",
//     backgroundColor: "lightcyan"
//   },
//   header: {
//     marginTop: "8%",
//     marginHorizontal: "6%",
//     justifyContent: 'center',
//     alignItems: "center",
//   },
//   headerTxt: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#02ceed",
//     textAlign: "center"
//   },
//   Btn: {
//     marginTop: "6%",
//     width: "50%",
//     justifyContent: "center",
//     backgroundColor: "#02ceed"
//   }
// });
