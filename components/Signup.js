import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  navigation,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { Alert } from "react-native";
import { useState, useEffect } from "react";

export default function EmployeeSignup({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const [conPassword, setConpassword] = useState("");
  const [location,setlocation]=useState("");
  const sendData = () => {
    if (
      username.length === 0 ||
      password.length === 0 ||
      conPassword.length === 0 || location.length===0
    ) {
      Alert.alert("please fill the required field");
    } else if (password !== conPassword) {
      Alert.alert("password does not match. Please try again!");
    } else {
      var apiLink = "http://192.168.1.105:80/apis/Signup.php";
      var data = {
        username: username,
        password: password,
        location:location,
      };
      var headers = {
        Accept: "application/json,text/plain, */*",
        "content-type": "application/json",
      };

      fetch(apiLink, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => Alert.alert(response[0].Message))
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          padding: "2%",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Sign up
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="UserName"
        placeholderTextColor="#CCCCCC"
        onChangeText={(text) => setUserName(text)}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#CCCCCC"
        secureTextEntry={true}
        onChangeText={(text) => setpassword(text)}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Confirm Password"
        placeholderTextColor="#CCCCCC"
        secureTextEntry={true}
        onChangeText={(text) => setConpassword(text)}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your location"
        placeholderTextColor="#CCCCCC"
        secureTextEntry={true}
        onChangeText={(text) => setlocation(text)}
      ></TextInput>

      <TouchableOpacity style={styles.signupbutton} onPress={sendData}>
        <Icon style={{ textAlign: "center" }} name="user">
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            {" "}
            Register
          </Text>
        </Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B8057",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: "5%",
    width: "60%",
    borderBottomWidth: 1,
    borderColor: "white",
    margin: "3%",
    color: "#CCCCCC",
  },
  loginbutton: {
    width: "60%",
    backgroundColor: "#98FB98",
    padding: "4%",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#98FB98",
    textAlign: "center",
    margin: "5%",
  },
  signupbutton: {
    width: "60%",
    backgroundColor: "#FCA503",
    padding: "4%",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#FCA503",
    textAlign: "center",
    margin: "3%",
  },
});
