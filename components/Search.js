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
import { SearchBar } from "react-native-elements";
import axios from "axios";

export default function Search({ navigation }) {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const fetchCities = (text) => {
    setCity(text);
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: `${city}`, days: "3" },
      headers: {
        "x-rapidapi-key": "6f7f2aeb4fmshbda174dffbebc0ap1bc89ajsn451171c737f8",
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCities([response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <View style={styles.con}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          placeholder="Type Here..."
          style={styles.SearchBar}
          onChangeText={(text) => fetchCities(text)}
          value={city}
        />
      </View>
      <View style={styles.con}>
        <FlatList
          data={cities}
          keyExtractor={(id, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("Weather", { param1: item })}
            >
              <View>
                <Text style={styles.TextDecor}>
                  {JSON.stringify(item.location.name).slice(1, -1)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
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
    height: 100,
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
    marginBottom: 6,
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
