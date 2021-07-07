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
import { Alert } from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";

Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});

export default function Click({ navigation, route }) {

  const ws = new Date();
  ws.setMonth(9);
  ws.setDate(1);
  ws.setFullYear(2021);

  const wh = new Date();
  ws.setMonth(2);
  ws.setDate(1);
  ws.setFullYear(2022);

  const cs = new Date();
  ws.setMonth(1);
  ws.setDate(1);
  ws.setFullYear(2022);

  const ch = new Date();
  ws.setMonth(8);
  ws.setDate(1);
  ws.setFullYear(2022);

  const as = new Date();
  ws.setMonth(11);
  ws.setDate(1);
  ws.setFullYear(2021);

  const ah = new Date();
  ws.setMonth(7);
  ws.setDate(1);
  ws.setFullYear(2022);

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
    Permission.getAsync(Permission.NOTIFICATIONS)
      .then((response) => {
        if (response.status !== "granted") {
          return Permission.askAsync(Permission.NOTIFICATIONS);
        }
        return response;
      })
      .then((response) => {
        if (response.status !== "granted") {
          return;
        }
      });
    funclocation();
    wheatshandleNotification();
    wheathhandleNotification();
    cornshandleNotification();
    cornhhandleNotification();
    AppleshandleNotification();
    ApplehhandleNotification();
  }, []);
  const trigger = new Date(ws);
  trigger.setHours(0);
  trigger.setMinutes(0);
  trigger.setSeconds(0);
  const wheatshandleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Weather",
        body: "Its time for you to sow the wheat crop",
      },

      trigger,
    });
  };
  const trigger1 = new Date(wh);
  trigger1.setHours(0);
  trigger1.setMinutes(0);
  trigger1.setSeconds(0);
  const wheathhandleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Weather",
        body: "its time for you to harvest the wheat crop",
      },
      trigger1,
    });
  };
  const trigger2 = new Date(cs);
  trigger2.setHours(0);
  trigger2.setMinutes(0);
  trigger2.setSeconds(0);
  const cornshandleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Weather",
        body: "Its time for you to sow the corn crop",
      },
      trigger2,
    });
  };
  const trigger3 = new Date(ch);
  trigger3.setHours(0);
  trigger3.setMinutes(0);
  trigger3.setSeconds(0);
  const cornhhandleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Weather",
        body: "its time for you to harvest the corn crop",
      },
      trigger3,
    });
  };
  const trigger4 = new Date(as);
  trigger4.setHours(0);
  trigger4.setMinutes(0);
  trigger4.setSeconds(0);
  const AppleshandleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Weather",
        body: "its time for you to sow the apple trees",
      },
      trigger4,
    });
  };
const trigger5 = new Date(ah);
trigger5.setHours(0);
trigger5.setMinutes(0);
trigger5.setSeconds(0);
  const ApplehhandleNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Weather",
        body: "its time for you to harvest the apple trees",
      },
      trigger5,
    });
  };

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
          <Text style={styles.TextDecor}>Set Reminder</Text>
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
