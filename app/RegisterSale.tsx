import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, Text} from "react-native";

export default function RegisterSale() {


  return(
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={[styles.loginText,{color: 'red'}]}>Kaligandaki Suppliers</Text>
          <Text style={styles.loginText}>Login</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
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
