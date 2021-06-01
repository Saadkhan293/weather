import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

export default function Weather({ route }) {
  const [loading, setLoading] = useState(true);
  const [location, setlocation] = useState(route.params.param1);
  const [cities, setCities] = useState();
  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: `${location}`, days: "3" },
      headers: {
        "x-rapidapi-key": "6f7f2aeb4fmshbda174dffbebc0ap1bc89ajsn451171c737f8",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCities(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  render = () => {
    if (loading) {
      return (
        <View style={styles.con}>
          <ActivityIndicator color="white" size="large" />
          <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>Please wait while the data is loaded</Text>
        </View>
      );
    }
    if (!loading) {
      return (
        <ScrollView style={styles.Container}>
          <View style={styles.weatherCard}>
            <View style={styles.imageText}>
              <Image
                source={{
                  uri: `http:${JSON.stringify(
                    cities.current.condition.icon
                  ).slice(1, -1)}`,
                }}
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
                {JSON.stringify(cities.current.temp_c)}°C{" "}
              </Text>
            </View>
            <Text style={styles.text}>
              {JSON.stringify(cities.current.temp_f)}°F
            </Text>
            <Text style={styles.text}>
              {JSON.stringify(cities.current.condition.text)}
            </Text>
            <Text style={styles.text}>
              {JSON.stringify(cities.forecast.forecastday[0].date)}
            </Text>
          </View>
          <View style={styles.weatherCard}>
            <View style={styles.imageText}>
              <Image
                source={{
                  uri: `http:${JSON.stringify(
                    cities.forecast.forecastday[1].day.condition.icon
                  ).slice(1, -1)}`,
                }}
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
                {JSON.stringify(cities.forecast.forecastday[1].day.maxtemp_c)}°C{" "}
              </Text>
            </View>
            <Text style={styles.text}>
              {JSON.stringify(cities.forecast.forecastday[1].day.maxtemp_f)}°F
            </Text>
            <Text style={styles.text}>
              {JSON.stringify(
                cities.forecast.forecastday[1].day.condition.text
              )}
            </Text>
            <Text style={styles.text}>
              {JSON.stringify(cities.forecast.forecastday[1].date)}
            </Text>
          </View>
          <View style={styles.weatherCard}>
            <View style={styles.imageText}>
              <Image
                source={{
                  uri: `http:${JSON.stringify(
                    cities.forecast.forecastday[2].day.condition.icon
                  ).slice(1, -1)}`,
                }}
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
                {JSON.stringify(cities.forecast.forecastday[2].day.maxtemp_c)}°C{" "}
              </Text>
            </View>
            <Text style={styles.text}>
              {JSON.stringify(cities.forecast.forecastday[2].day.maxtemp_f)}°F
            </Text>
            <Text style={styles.text}>
              {JSON.stringify(
                cities.forecast.forecastday[2].day.condition.text
              )}
            </Text>
            <Text style={styles.text}>
              {JSON.stringify(cities.forecast.forecastday[2].date)}
            </Text>
          </View>
        </ScrollView>
      );
    }
  };
  return <View style={styles.con}>{render()}</View>;
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
    backgroundColor: "#1B8057",
  },
  weatherCard: {
    height: 300,
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
