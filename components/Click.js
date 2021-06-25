import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  navigation,
} from "react-native";

export default function Click({ navigation, route }) {
  const [location, setLocation] = useState("");
  const [username, setusername] = useState(route.params.param1);

  const funclocation = () => {
    var apiLink = "http://192.168.1.107:80/apis/getLocation.php";
    var data = {
      username: username,
    };
    var headers = {
      Accept: "application/json",
      "content-type": "application/json",
    };

    fetch(apiLink, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        setLocation(response[0].location);
        console.log(location);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    funclocation();
  });

  return (
    <View style={styles.con}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("Weather", { param1: location });
        }}
      >
        <View>
          <Text style={styles.TextDecor}>
            Click on your city {JSON.stringify(location).slice(1, -1)} to check
            its Weather
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate("Reminder");
        }}
      >
        <View>
          <Text style={styles.TextDecor}>
            Set Reminder
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B8057",
    width: "100%",
  },
  con: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B8057",
  },
  card: {
    height: 200,
    alignContent: "flex-start",
    justifyContent: "center",
    backgroundColor: "#B0CA87",
    borderRadius: 15,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 30,
    marginBottom: 90,
    marginLeft: 16,
    marginRight: 16,
    width: 380,
  },
  TextDecor: {
    alignItems: "center",
    fontWeight: "bold",
    position: "relative",
  },
});
