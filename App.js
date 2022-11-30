import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableWithoutFeedback } from "react-native-web";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'PinIt!'}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'PinIt!'}}/>
        <Stack.Screen name="Locations" component={LocationScreen} options={{ title: 'Locations'}}/>
        <Stack.Screen name="Upload" component={UploadScreen} options={{ title: 'Upload'}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={ {title: 'Profile'}}/>
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} options={{ title: 'Leaderboard'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0aaff'}}>
        <Text style={styles.heading}> Menu </Text>
        <TouchableOpacity style={styles.menuBtns}>
          <Button fontfamily='sans-serif' fontweight='bold' color='#bd68ee' title="Locations" onPress={() => navigation.navigate('Locations')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtns}>
          <Button color='#bd68ee' title="Leaderboard" onPress={() => navigation.navigate('Leaderboard')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtns}>
          <Button color='#bd68ee' title="Upload" onPress={() => navigation.navigate('Upload')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBtns}>
          <Button color='#bd68ee' title="Profile" onPress={() => navigation.navigate('Profile')}/>
        </TouchableOpacity>
      </View>

    );
}

function RegisterScreen({navigation}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/pin.png")} />
      <Text style={styles.title}> Pin It !</Text>
      <StatusBar style="auto" />
     <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Name"
        placeholderTextColor="#003f5c"
        onChangeText={(namel) => setEmail(name)}
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
    <TouchableOpacity>
      <Button style={styles.forgot_button} title="Already Have An Account? Login Now!" onPress={() => navigation.navigate('Login')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn}>
      <Button color='white' title="Register" onPress={() => navigation.navigate('Home')}/>
    </TouchableOpacity>
    </View>
  );
}

function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/pin.png")} />
      <Text style={styles.title}> Pin It !</Text>
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
      <Button color='white' title="Login" onPress={() => navigation.navigate('Home')}/>
    </TouchableOpacity>
    </View>
  );
}

function LocationScreen() {
    return (
       <View style={styles.pages}>
      <Text style={styles.heading}>Locations</Text>
    </View>
    );
}

function UploadScreen() {
    return (
       <View style={styles.pages}>
      <Text style={styles.heading}>Upload</Text>
    </View>
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
 
  image: {
    marginBottom: 20,
    width: "30%",
    height: 150,
  },

  title: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "bold",
  },
 
  inputView: {
    backgroundColor: "#ffff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#0096c7",
  },

  menuBtns: {
    width: "80%",
    borderRadius: 15,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    backgroundColor: "white",
    fontFamily: 'sans-serif-thin',
  }, 

  heading: {
    fontSize: 70,
    marginBottom: 15, 
    fontFamily: 'sans-serif',
    fontWeight:'bold',
  },

  pages: {
    flex: 1,
    backgroundColor: '#c77dff',
    alignItems: "center",
    justifyContent: "center",
  },
});