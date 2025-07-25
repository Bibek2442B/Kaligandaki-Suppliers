import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";

export default function AddCustomer() {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={[styles.loginText,{color: 'red'}]}>Kaligandaki Suppliers</Text>
                <Text style={styles.loginText}>Add Customer</Text>
                <Text style={styles.text}>Customer Name</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    placeholder={"Fullname"}
                    placeholderTextColor={"gray"}
                />
                <Text style={styles.text}> Customer Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Address "}
                    placeholderTextColor={"gray"}
                />
                <Text style={styles.text}> Customer Pan Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"PAN Number "}
                    placeholderTextColor={"gray"}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                >
                    <Text style={styles.buttonText}>Add Customer</Text>
                </TouchableOpacity>
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
    buttonText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
});
