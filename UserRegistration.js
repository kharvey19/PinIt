// import React, { FC, ReactElement, useState } from "react";
// import {Alert, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from "react-native";
// import Parse from "parse/react-native";

// import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Device from 'expo-device';
// import * as Location from 'expo-location';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export const UserRegistration = ({navigation}) => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const doUserRegistration = async function ({navigation}) {
//         const nameValue = name;
//         const emailValue = email;
//         const passwordValue = password; 
//         return await Parse.User.signUp(nameValue, emailValue, passwordValue)
//             .then((createdUser) => {
//                 Alert.alert(
//                     "Sucess!",
//                     'User ${createdUser.get("name")} was successfully created!'
//                 );
//             return true;
//             })
//             .catch((error) => {
//                 Alert.alert("Error!", error.message);
//                 return false;
//             });
//     }
//     return (
//     <>
//     <View style={styles.inputView}>
//         <TextInput
//         style={styles.TextInput}
//         placeholder="Name"
//         placeholderTextColor="#003f5c"
//         onChangeText={(name) => setName(name)}
//         />
//     </View>
//     <View style={styles.inputView}>
//         <TextInput
//         style={styles.TextInput}
//         placeholder="Email"
//         placeholderTextColor="#003f5c"
//         onChangeText={(email) => setEmail(email)}
//         />
//         </View>
//     <View style={styles.inputView}>
//         <TextInput
//         style={styles.TextInput}
//         placeholder="Password"
//         placeholderTextColor="#003f5c"
//         secureTextEntry={true}
//         onChangeText={(password) => setPassword(password)}
//         />
//     </View>
//         <View style={styles.inputView}>
//         <TextInput
//         style={styles.TextInput}
//         placeholder="Confirm Password"
//         placeholderTextColor="#003f5c"
//         secureTextEntry={true}
//         onChangeText={(confirmpassword) => setPassword(confirmpassword)}
//         />
//     </View>
    
//     <TouchableOpacity style={styles.loginBtn}>
//     <Button color='white' title="Register" onPress={() => doUserRegistration()}/>
//     </TouchableOpacity>
//     </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#caf0f8",
//       alignItems: "center",
//       justifyContent: "center",
//     },
   
//     // images 
  
//     image: {
//       marginBottom: 20,
//       width: "30%",
//       height: 150,
//     },
  
//     house_image: {
//       marginBottom: 30,
//       width: "25%",
//       height: 110,
//     },
  
//     upload_image: {
//       width: "30%",
//       height: 150,
//     },
  
//     // input box styling 
  
//     inputView: {
//       backgroundColor: '#e9ecef',
//       borderRadius: 10,
//       width: "75%",
//       height: 45,
//       marginBottom: 20,
//     },
   
//     TextInput: {
//       height: 50,
//       flex: 1,
//       padding: 10,
//       marginLeft: 20,
//     },
   
//     // buttons
  
//     forgot_button: {
//       height: 30,
//       marginBottom: 30,
//     },
  
//     loginBtn: {
//       width: "80%",
//       borderRadius: 10,
//       height: 50,
//       justifyContent: "center",
//       marginTop: 20,
//       backgroundColor: "#0096c7",
//     },
  
//     menuBtns: {
//       width: "80%",
//       borderRadius: 15,
//       height: 55,
//       justifyContent: "center",
//       marginTop: 35,
//       backgroundColor: "white",
//     }, 
  
//     // anything you want to add to every page
    
//     pages: {
//       flex: 1,
//       backgroundColor: 'white',
//       alignItems: "center",
//       justifyContent: "center",
//     },
  
  
//     // text 
  
//     title: {
//       marginBottom: 30,
//       fontSize: 40,
//       fontWeight: "bold",
//     },
  
//     heading: {
//       fontSize: 70,
//       marginBottom: 15, 
//       fontFamily: 'sans-serif',
//       fontWeight:'bold',
//     },
  
//     general_text: {
//       fontFamily: 'sans-serif',
//       textAlign:"center",
//       fontSize: 25, 
//       marginHorizontal: 30,
//       marginBottom: 40, 
//       marginTop: 20,
//       },
  
//       pinIt: {
//         fontSize: 70, 
//         fontWeight: "bold",
//         marginBottom: 30,
//       }
//   });