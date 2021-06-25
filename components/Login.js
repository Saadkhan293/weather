import React from "react";
import { Alert } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  navigation,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";
export default function Employeelogin({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");

  const sendData = () => {
    if (username.length == 0 || password.length == 0) {
      Alert.alert("please fill the required field");
    } else {
      var apiLink = "http://192.168.1.107:80/apis/Login.php";
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
            navigation.navigate("Search", { param1: username });
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
      <ImageBackground
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1506500072623-b8c2a36a047e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
        }}
      >
        <View style={styles.con}>
          <Text
            style={{
              fontSize: 30,
              padding: "2%",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Login
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  con: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textInput: {
    height: "6%",
    width: "60%",
    borderBottomWidth: 1,
    borderColor: "white",
    margin: "3%",
    color: "#CCCCCC",
    fontWeight:"bold"
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
