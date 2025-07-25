import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useState} from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const handleRegisterButton = () => {
        if(password === repeatPassword){

        }

    }
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={[styles.loginText,{color: 'red'}]}>Kaligandaki Suppliers</Text>
                <Text style={styles.loginText}>Register</Text>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder={"Enter your email address "}
                    placeholderTextColor={"gray"}
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder={"Enter your password "}
                    placeholderTextColor={"gray"}
                    value={password}
                    onChangeText={setPassword}
                />
                <Text style={styles.text}>Repeat Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder={"Enter your password "}
                    placeholderTextColor={"gray"}
                    value={repeatPassword}
                    onChangeText={setRepeatPassword}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                >
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
                <Text style={styles.lightText}>Or</Text>
                <Text style={styles.lightText}>Continue With</Text>
                <TouchableOpacity style={styles.googleButton}>
                    <MaterialCommunityIcons name="google" size={24} color="#fff" />
                    <Text style={styles.buttonText}>Google</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Already Registered?</Text>
                <TouchableOpacity><Text style={[styles.text, styles.link]}>Login</Text></TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    loginText:{
        fontSize: 30,
        fontWeight: "bold",
         marginBottom: 20,
    },
    text:{
        fontSize: 20,
    },
    input:{
        width: '80%',
        height: 50,
        borderWidth: 2,
        borderColor: "black",
        marginBottom: 20,
        borderRadius: 20,
        padding: 10,
    },
    button:{
        width: '80%',
        borderRadius: 20,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgreen",
        padding: 15,
    },
    googleButton: {
        flexDirection: 'row',
        backgroundColor: '#4285F4',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 60,
    },
    buttonText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 16,
    },
    lightText:{
        color: "gray",
    },
    link:{
        color: "blue",

    }
});

