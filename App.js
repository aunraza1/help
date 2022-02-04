// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screen/login";
import Signup from "./screen/signup";
import Dashboard from "./screen/dashboard";
import Forget from "./screen/forget-password";
import HomeScreen from "./screen/HomeScreen";
import ProfileScreen from "./screen/ProfileScreen";
import SettingScreen from "./screen/SettingScreen";
import SupportScreen from "./screen/SupportScreen";
import DetailScreen from "./screen/DetailScreen";
// import KYC from './screen/kyc'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="SupportScreen" component={SupportScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        {/* <Stack.Screen name="KYC" component={KYC} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
