import React, { useState,useEffect} from "react";
import { TextInput, Text, StyleSheet, View,Button,TouchableOpacity,Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
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

export default function Reminder() {
    const [date, setDate] = useState(new Date(Date.UTC(0, 0, 0, 0, 0, 0)));
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);
    const [desc,setDesc]= useState('');

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === "ios");
      setDate(currentDate);
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode("date");
    };

    const showTimepicker = () => {
      showMode("time");
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
    }, []);
    const trigger = new Date(date);
    trigger.setHours(new Date(date).getHours())
    trigger.setMinutes(new Date(date).getMinutes());
    trigger.setSeconds(0);
    const handleNotification = () => {
      Alert.alert("Your reminder has been set. You will be notified");
      Notification.scheduleNotificationAsync({
        content: {
          title: "Weather",
          body: desc,
        },

        trigger,
      });
    };
    return (
      <View style={styles.Container}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            margin: "2.5%",
          }}
        >
          <TextInput
            placeholder="add Description"
            onChangeText={(text) => setDesc(text)}
            style={{
              borderWidth: 1,
              borderColor: "white",
              width: "70%",
              padding: "10%",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 20,
              color:"white",
            }}
            placeholderTextColor="white"
          ></TextInput>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            margin: "2.5%",
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "white",
              width: "70%",
              padding: "10%",
            }}
            onPress={showDatepicker}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20,color:"white"}}>
              {JSON.stringify(date).slice(1, -15)}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            margin: "2.5%",
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "black",
              width: "70%",
              padding: "10%",
              borderColor:"white"
            }}
            onPress={showTimepicker}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20,color:"white" }}>
              {JSON.stringify(new Date(date).getHours())}:
              {JSON.stringify(new Date(date).getMinutes())}
            </Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <TouchableOpacity
          style={styles.loginbutton}
          onPress={()=> handleNotification()}
        >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                Set Reminder
            </Text>
        </TouchableOpacity>
        {/* <Button title="press me" onPress={() => handleNotification()}></Button> */}
      </View>
    );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B8057",
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
});
