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

export default function Search({ navigation,route }) {
  const [location, setLocation] = useState("");
  const [cities, setCities] = useState([]);
   const [username, setusername] = useState(route.params.param1);
    const fetchCities = (text) => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: { q: `${text}`, days: "3" },

        headers: {
          "x-rapidapi-key":
            "6f7f2aeb4fmshbda174dffbebc0ap1bc89ajsn451171c737f8",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setCities([response.data]);
          console.log(cities);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  const funclocation = () => {
    var apiLink = "http://192.168.1.105:80/apis/getLocation.php";
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
        // console.log(JSON.stringify(response[0].location));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    funclocation();
  }, )


  return (
    <View style={styles.con}>
      {/* <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          placeholder="Type Here..."
          style={styles.SearchBar}
          onChangeText={(text) => fetchCities(text)}
          value={city}
        />
      </View> */}
      
         
            <TouchableOpacity
              style={styles.card}
              onPress={() => { fetchCities(location)
                navigation.navigate("Weather", { param1: location,param2:cities })
              }}
            >
              <View>
                <Text style={styles.TextDecor}>
                  Click on your city {JSON.stringify(location).slice(1, -1)} to check its Weather
                </Text>
              </View>
            </TouchableOpacity>
        
     
      </View> )
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
