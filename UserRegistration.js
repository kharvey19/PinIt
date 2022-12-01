import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, TextInput } from "react-native";
import Parse from "parse/react-native";

export const UserRegistration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const doUserRegistration = async function () {
        const nameValue = name;
        const emailValue = email;
        const passwordValue = password; 
        return await Parse.User.signUp(nameValue, emailValue, passwordValue)
            .then((createdUser) => {
                Alert.alert(
                    "Sucess!",
                    'User ${createdUser.get("name")} was successfully created!'
                );
            return true;
            })
            .catch((error) => {
                Alert.alert("Error!", error.message);
                return false;
            });
    }
    return (
    <>
    <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Name"
        placeholderTextColor="#003f5c"
        onChangeText={(name) => setName(name)}
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
    <Button style={styles.forgot_button} color='#9d4edd' title="Already Have An Account? Login Now!" onPress={() => navigation.navigate('Login')}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn}>
    <Button color='white' title="Register" onPress={() => navigation.navigate('Home')}/>
    </TouchableOpacity>
    </>
    );
}