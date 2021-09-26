import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-maps";
import constants from "./constants";
import { Header, Card } from "react-native-elements";
import Geocode from "react-geocode";
import Icon3 from "react-native-vector-icons/Ionicons";
import API_KEY from "./apikey";
import * as Location from "expo-location";
import axios from "axios";
import ReverseGeocode from "./reverseGeocode";
var clinicArr = [];
var coordArr = [];
var result = [];
function currentLoc({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loc1, setLoc1] = useState(null);
  const [loc2, setLoc2] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [reslat, setReslat] = useState(0);
  const [reslng, setReslng] = useState(0);
  const [coords, setCoords] = useState(null);
  const [clinicList, setClinicList] = useState([]);
  const [coordList, setCoordList] = useState([]);
  const [results, setResults] = useState([]);

  Geocode.setApiKey(API_KEY);

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

  // const location = Location.getCurrentPositionAsync();
  // const location = Location.getCurrentPositionAsync();

  //현위치 주소 받기
  const GetAddress = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${API_KEY}`
      );
      // .then((response) => {
      const result = response.data.results[0].formatted_address.split(" ");
      console.log(result[1] + " " + result[2]);
      setLoc1(result[1]);
      setLoc2(result[2]);
      // });
    } catch (error) {
      console.log(error);
    }
  };

  console.log("LOCATION:", loc1, loc2);
  //현위치 기반 선별진료소 받고 clinicArr에 push하기
  const GetClinic = async () => {
    try {
      // console.log("55");

      let response = await axios.get("https://www.ttockclinic.com/v1/clinics", {
        params: { addr1: loc1, addr2: loc2 },
      });
      response.data.map((item) => clinicArr.push(item));
      setClinicList(clinicArr);
      //   clinicList.map((item) => getLatLngFromAddress(item.address));
    } catch (error) {
      console.log(error);
    }
    console.log("ccl", clinicList);
  };
  //주소를 좌표로 변환
  const getLatLngFromAddress = () => {
    // console.log("66");
    var addressArr = [];
    clinicList.map((item) => {
      addressArr.push(item.address);
    });
    Geocode.fromAddress(addressArr).then((response) => {
      console.log("좌표", response);
      response.results.map((item) => coordArr.push(item.geometry.location));
      setCoordList(coordArr);
      console.log("COORDARR", coordList);
    });
  };

  const HandleChange = () => {
    // geoLocation();
    GetAddress();
    GetClinic();
    getLatLngFromAddress();

    console.log("coordList", coordList);
    // navigation.navigate("CurLoc2", { newCoord: coordList });
  };

  return (
    <>
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
              <Text>현위치</Text>
            </Card.Title>
          </View>
          <Text style={styles.mainDescription}>
            오늘의 코로나 확진자수를 한눈에 알아보세요
          </Text>

          {location && (
            <MapView
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
            style={styles.button}
            onPress={() => {
              location &&
                navigation.navigate("Clinic2", {
                  sd: location.latitude,
                  sgg: location.longitude,
                });
            }}
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
    </>
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
    marginLeft: "8%",
    marginTop: "-7%",
    marginBottom: "12%",
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
export default currentLoc;
