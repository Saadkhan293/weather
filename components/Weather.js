import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  navigation,
  Image,
  ScrollView,
} from "react-native";
import axios from "axios";

export default function Weather({ navigation, route }) {
  const [weather, setweather] = useState(route.params.param1);
  const string = "http:" + weather.current.condition.icon;
  const string_2 = "http:" + weather.forecast.forecastday[1].day.condition.icon;
  const string_3 = "http:" + weather.forecast.forecastday[2].day.condition.icon;
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.weatherCard}>
        <View style={styles.imageText}>
          <Image
            source={{ uri: `${string}` }}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 15,
            }}
          >
            {weather.current.temp_c}°C{" "}
          </Text>
        </View>
        <Text style={styles.text}>{weather.current.temp_f}°F</Text>
        <Text style={styles.text}>{weather.current.condition.text}</Text>
        <Text style={styles.text}>{weather.forecast.forecastday[0].date}</Text>
      </View>
      <View style={styles.weatherCard}>
        <View style={styles.imageText}>
          <Image
            source={{ uri: `${string_2}` }}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 15,
            }}
          >
            {weather.forecast.forecastday[1].day.maxtemp_c}°C{" "}
          </Text>
        </View>
        <Text style={styles.text}>
          {weather.forecast.forecastday[1].day.maxtemp_f}°F
        </Text>
        <Text style={styles.text}>
          {weather.forecast.forecastday[1].day.condition.text}
        </Text>
        <Text style={styles.text}>{weather.forecast.forecastday[1].date}</Text>
      </View>
      <View style={styles.weatherCard}>
        <View style={styles.imageText}>
          <Image
            source={{ uri: `${string_3}` }}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginLeft: 10,
              marginTop: 15,
            }}
          >
            {weather.forecast.forecastday[2].day.maxtemp_c}°C{" "}
          </Text>
        </View>
        <Text style={styles.text}>
          {weather.forecast.forecastday[2].day.maxtemp_f}°F
        </Text>
        <Text style={styles.text}>
          {weather.forecast.forecastday[2].day.condition.text}
        </Text>
        <Text style={styles.text}>{weather.forecast.forecastday[2].date}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#1B8057",
    borderColor: "black",
  },
  con: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderColor: "black",
  },
  weatherCard: {
    height: 300,
    alignContent: "flex-start",
    justifyContent: "center",
    backgroundColor: "#557545",
    borderRadius: 15,
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 16,
    marginRight: 16,
    width: 380,
  },
  imageText: {
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    textAlign: "center",
  },
});
