import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-maps";
import * as Location from "expo-location";

function currentLocation({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
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
  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <Text style={styles.header}>💉똑똑 선별진료소💉</Text>
      </View>
      {/* 임시 */}

      <View style={styles.container2}>
        <Text>{text}</Text>
        {location && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.0421,
              // latitude: Location.geocodeAsync(latitude),
              // longitude: location.longitude,
              // latitudeDelta: 0.05,
              // longitudeDelta: 0.0421,
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
          style={styles.menu}
          onPress={() => navigation.navigate("Clinic")}
        >
          <Text style={styles.text2}>다음 화면으로 넘어감</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer}>Enonymous</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  container1: {
    flex: 1,
    backgroundColor: "#00462a",
    alignItems: "center",
    marginTop: 0,
    height: 5,
  },
  container2: {
    flex: 6,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    color: "white",
    fontSize: 30,
    letterSpacing: 3,
    fontWeight: "bold",
    height: 50,
    margin: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "red",
  },
  text: {
    color: "gray",
    fontSize: 30,
  },
  text2: {
    color: "white",
    fontSize: 30,
  },
  menu: {
    marginTop: 50,
    fontSize: 30,
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    width: "70%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 0.8,
    color: "white",
    fontSize: 30,
    letterSpacing: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00462a",
  },
});
export default currentLocation;
