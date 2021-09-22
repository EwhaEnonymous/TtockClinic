import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import API_KEY from "./apikey";
import axios from "axios";
import constants from "./constants";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import MapView from "react-native-maps";
import "react-native-gesture-handler";
import { PROVIDER_GOOGLE } from "react-native-maps";

function ReverseGeocode({ navigation }) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [loc1, setLoc1] = useState("");
  const [loc2, setLoc2] = useState("");
  const [loc3, setLoc3] = useState("");
  //   const [location, setLocation] = useState("");

  const GetLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log("loc", location);
    console.log("lat", location.coords.latitude);
    console.log("lng", location.coords.longitude);

    setLat(location.coords.latitude);
    setLng(location.coords.longitude);

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${API_KEY}`
      ) // 위도, 경도 google maps api로 보냄
      .then((res) => {
        console.log(res);
        const result = res.data.results[5].formatted_address.split(" "); // 앞에 대한민국은 뺀다.

        console.log(result);
        console.log(result[1]);
        console.log(result[2]);
        console.log("loc:", loc1, loc2, loc3);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  //   });
  return (
    <View style={styles.body}>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={
          <TouchableOpacity>
            <Text
              style={styles.headerText}
              onPress={() => navigation.navigate("Main")}
            >
              💉똑똑 선별진료소💉
            </Text>
          </TouchableOpacity>
        }
        placement="center"
        rightComponent={{ icon: "home", color: "#fff" }}
        backgroundColor={"#00462a"}
      ></Header>
      {/* <View style={styles.container}>
          {location && (
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            >
              <MapView.Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              />
            </MapView>
          )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Clinic")}
        >
          <Text style={styles.buttonText}>다음 화면으로 넘어감</Text>
        </TouchableOpacity>
      </View> */}
      <GetLocation />
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  headerText: {
    color: "#fff",
    letterSpacing: 3,
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 6,
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  map: {
    flex: 0.7,
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "red",
  },
  button: {
    flex: 1,
    marginTop: 50,
    fontSize: constants.width > 370 ? 30 : 18,
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    borderWidth: 2,
    borderRadius: 10,
    width: "70%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "70%",
  },
  buttonText: {
    color: "white",
    fontSize: constants.width > 370 ? 30 : 18,
  },
});

export default ReverseGeocode;
