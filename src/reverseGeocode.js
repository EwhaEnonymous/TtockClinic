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

function ReverseGeocode(props) {
  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);
  const [loc1, setLoc1] = useState("");
  const [loc2, setLoc2] = useState("");
  const [loc3, setLoc3] = useState("");
  //   const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.lat},${props.lng}&key=${API_KEY}`
        ) // 위도, 경도 google maps api로 보냄
        .then((res) => {
          console.log(res);
          // const result = res.data.results[5].formatted_address.split(" "); // 앞에 대한민국은 뺀다.
          // console.log("PROPS", props.lat);
          // console.log(result);
          // console.log(result[1]);
          // console.log(result[2]);
        })

        .catch((error) => {
          console.log(error);
        });
    })();
  }, []);

  let text = "Waiting..";
  // let lat = 0;
  // let long = 0;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(location.latitude);
    console.log(location.longitude);
  }
  //   });
  return (
    <View style={styles.body}>
      {/* {location && (
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
        )} */}
      {/* <TouchableOpacity */}
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
