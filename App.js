import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Stacknavigation from './navigation/Stacknavigation';
const Stack = createStackNavigator();

export default function App() {
   return (
  
    <NavigationContainer>
   <Stacknavigation />
    </NavigationContainer>


  );
}
