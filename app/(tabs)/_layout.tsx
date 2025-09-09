import {Stack} from "expo-router";

export default function TabsLayout(){

    return (
        <Stack>
            <Stack.Screen name={"Dashboard"} options={{headerShown: false}} />
            <Stack.Screen name={"AddCustomer"} options={{headerShown: false}} />
        </Stack>
    );
}