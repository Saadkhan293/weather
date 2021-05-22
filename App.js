import React from "react";
import { StyleSheet } from "react-native";

import Login from "./components/Login";
import Signup from "./components/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stacknavigation from './navigation/Stacknavigation';
import Weather from "./components/Weather"
import Search from './components/Search'; 
const Stack = createStackNavigator();

export default function App() {
   return (
  
    <NavigationContainer>
   <Stacknavigation />
    </NavigationContainer>


  );
}
