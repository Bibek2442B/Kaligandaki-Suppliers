import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {auth} from "@/firebase.config";

export default function Dashboard(){
    const handleLogOut = async () => {
        await auth.signOut();
    }
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={[styles.loginText,{color: 'red'}]}>Kaligandaki Suppliers</Text>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Register Sale</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Register Purchase</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Add Customer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Add Product</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Add Supplier</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{}}><Text style={styles.buttonText}>Profile</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogOut}><Text style={styles.buttonText}>Logout</Text></TouchableOpacity>
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
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    lightText:{
        color: "gray",
    },
    link:{
        color: "blue",
    }
});