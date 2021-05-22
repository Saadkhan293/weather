import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Search from "../components/Search";
import { createStackNavigator } from "@react-navigation/stack";
import Weather from "../components/Weather";
const Stack = createStackNavigator();

export default function Stacknavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1B8057",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: "white",
          fontWeight: "bold",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Sign in" component={Login} />
      <Stack.Screen name="Sign up" component={Signup} />
      <Stack.Screen name="Search City" component={Search} />
      <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  );
}
