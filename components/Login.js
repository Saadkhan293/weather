import React from "react";
import { Alert } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  navigation,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";
import EmployeeSignup from "./Signup";

export default function Employeelogin({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const sendData = () => {
    if (username.length == 0 || password.length == 0) {
      Alert.alert("please fill the required field");
    } else {
      var apiLink = "http://192.168.1.105:80/apis/Login.php";
      var data = {
        username: username,
        password: password,
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
        .then((response) => {
          if (response === "Data Matched") {
            Alert.alert("Login Successful");
            navigation.navigate("Search City");
          } else {
            Alert.alert("please try again");
          }
        })
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
        login
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
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
      <TouchableOpacity style={styles.loginbutton} onPress={sendData}>
        <Icon style={{ textAlign: "center" }} name="key">
          <Text style={{ textAlign: "center" }}> Login</Text>
        </Icon>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupbutton}
        onPress={() => navigation.navigate("Sign up")}
      >
        <Icon style={{ textAlign: "center" }} name="user">
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            SignUp
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
  },
});
