import {Stack, Tabs} from "expo-router";

export default function RootLayout() {
  return (
      <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name={"Login"} options={{ headerShown: false }} />
        <Tabs.Screen name={"Register"} options={{ headerShown: false }} />
        <Tabs.Screen name={"Dashboard"} options={{ headerShown: false }} />
        <Tabs.Screen name={"AddSupplier"} options={{ headerShown: false }} />
        <Tabs.Screen name={"AddCustomer"} options={{ headerShown: false }} />
        <Tabs.Screen name={"AddProduct"} options={{ headerShown: false }} />
      </Tabs>
  );
}
