import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-maps";
import constants from "./constants";
import { Header, Card } from "react-native-elements";
// import Geocode from ".geocode";
import Icon3 from "react-native-vector-icons/Ionicons";
import API_KEY from "./apikey";
import * as Location from "expo-location";
import axios from "axios";
import ReverseGeocode from "./reverseGeocode";
function currentLocation({ navigation }) {
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loc1, setLoc1] = useState(null);
  const [loc2, setLoc2] = useState(null);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const geoLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
    setLat(location.coords.latitude);
    setLng(location.coords.longitude);
  };
  useEffect(() => {
    geoLocation();
  });
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
      <View style={styles.container}>
        <View style={styles.container1}>
          <Card.Title style={styles.title}>
            <Icon3 name="chevron-forward-circle-outline" size={30}></Icon3>{" "}
            현위치
          </Card.Title>
        </View>
        {/* <Text>{(lat, lng)}</Text> */}
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: `${lat}`,
            longitude: `${lng}`,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: lat,
              longitude: lng,
            }}
          />
        </MapView>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Clinic")}
        >
          <Text style={styles.buttonText}>
            <Icon3
              name="chevron-forward-circle-outline"
              size={30}
              color="white"
            ></Icon3>{" "}
            가까운 선별진료소 찾기
          </Text>
        </TouchableOpacity>
      </View>
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
    // alignItems: "center",
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
  container1: {
    flex: 0.1,
    marginTop: "5%",
    marginLeft: "5%",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
  },
  card: {
    marginLeft: "-5%",
    marginRight: "-5%",
    marginBottom: "5%",
    marginTop: "5%",
    borderWidth: 0,
    shadowColor: "rgba(0,0,0, 0.0)", //ios 그림자 없애기
    elevation: 0, //안드로이드 그림자 없애기
  },
  button: {
    flex: 1,
    marginTop: 50,
    fontSize: constants.width > 370 ? 30 : 18,
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    borderWidth: 2,
    borderRadius: 10,
    width: "78%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "78%",
    left: "11%",
  },
  buttonText: {
    color: "white",
    fontSize: constants.width > 370 ? 30 : 18,
  },
});
export default currentLocation;
