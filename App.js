import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, ReactElement, FC } from "react";
import { Alert, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Device from 'expo-device';
import * as Location from 'expo-location';
import { UserRegistration } from "./UserRegistration";
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Initializing the SDK. 
// Parse.setAsyncStorage(AsyncStorage);
// //You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
// Parse.initialize('zAGXnm4PCSN7pG49TJNrlUOWq2xPg1S8bz68VusM', '9UZkCqABBIkIe4BYVQsohhfjs0ayqSqtih65kKQy');
// Parse.serverURL = 'https://parseapi.back4app.com/';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Welcome!' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Locations" component={LocationScreen} options={{ title: 'Locations' }} />
        <Stack.Screen name="Upload" component={UploadScreen} options={{ title: 'Upload' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} options={{ title: 'Leaderboard' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Image style={styles.house_image} source={require("./assets/house.png")} />
      <Text style={styles.general_text}> Get started by looking at one of our options below! </Text>
      <TouchableOpacity style={styles.topMenuBtn}>
        <Button fontfamily='sans-serif' fontweight='bold' color='white' title="Locations" onPress={() => navigation.navigate('Locations')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBtns}>
        <Button color='white' title="Leaderboard" onPress={() => navigation.navigate('Leaderboard')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBtns}>
        <Button color='white' title="Upload" onPress={() => navigation.navigate('Upload')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBtns}>
        <Button color='white' title="Profile" onPress={() => navigation.navigate('Profile')} />
      </TouchableOpacity>
    </View>
  );
}

function RegisterScreen({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView
      //     behavior={Platform.OS === "ios" ? "padding" : "height"}
      //     style={styles.pages}>
      //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      //       <><Image style={styles.image} source={require("./assets/pin.png")} />
      //         <Text style={styles.pinIt}> Pin It!</Text>
      //         <StatusBar style="auto" />
      //         <UserRegistration />
      //         <TouchableOpacity>
      //           <Button style={styles.forgot_button} color='#9d4edd' title="Already Have An Account? Login Now!" onPress={() => navigation.navigate('Login')} />
      //         </TouchableOpacity>
      //       </>
      //     </TouchableWithoutFeedback>
      //   </KeyboardAvoidingView>
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.pages}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <><Image style={styles.image} source={require("./assets/pin.png")} />
          <Text style={styles.pinIt}> Pin It!</Text>
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              onChangeText={(name) => setEmail(name)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(confirmpassword) => setPassword(confirmpassword)}
            />
          </View>
          <TouchableOpacity>
            <Button style={styles.forgot_button} color='#9d4edd' title="Already Have An Account? Login Now!" onPress={() => navigation.navigate('Login')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Button color='white' title="Register" onPress={() => navigation.navigate('Home')} />
          </TouchableOpacity>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.pages}>
      <Image style={styles.image} source={require("./assets/pin.png")} />
      <Text style={styles.title}> Pin It!</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Button color='white' title="Login" onPress={() => navigation.navigate('Home')} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

function LocationScreen() {
  return (
    <View style={styles.pages}>
      <Text style={styles.heading}>Locations</Text>
    </View>
  );
}

function UploadScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.pages}>
      <Image style={styles.upload_image} source={require("./assets/upload.png")} />
      <Text style={styles.general_text}>Found a location you want to share? Upload it below!</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Location Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setEmail(name)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Description"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(description) => setPassword(description)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Button color='white' title="Submit" onPress={() => navigation.navigate('Leaderboard')} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.pages}>
      <Text style={styles.heading}>Profile</Text>
    </View>
  );
}

function LeaderboardScreen() {
  return (
    <View style={styles.pages}>
      <Text style={styles.heading}>Leaderboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#caf0f8",
    alignItems: "center",
    justifyContent: "center",
  },

  // images 

  image: {
    marginBottom: 20,
    width: "30%",
    height: 150,
  },

  house_image: {
    marginBottom: 30,
    width: "25%",
    height: 110,
  },

  upload_image: {
    width: "30%",
    height: 150,
  },

  // input box styling 

  inputView: {
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    width: "75%",
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  // buttons

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#0096c7",
  },

  topMenuBtn: {
    width: "80%",
    borderRadius: 10,
    height: 70,
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#0096c7",
  },

  menuBtns: {
    width: "80%",
    borderRadius: 10,
    height: 70,
    justifyContent: "center",
    marginTop: 35,
    backgroundColor: "#0096c7",
  },

  // anything you want to add to every page

  pages: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
  },


  // text 

  title: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "bold",
  },

  heading: {
    fontSize: 70,
    marginBottom: 15,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },

  general_text: {
    fontFamily: 'sans-serif',
    textAlign: "center",
    fontSize: 25,
    marginHorizontal: 30,
    marginBottom: 40,
    marginTop: 20,
  },

  pinIt: {
    fontSize: 70,
    fontWeight: "bold",
    marginBottom: 30,
  }
});