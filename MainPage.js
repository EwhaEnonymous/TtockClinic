import React from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import QR from "./myQR";
import "react-native-gesture-handler";
import constants from "./constants";

const MainPage = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <Text style={styles.header}>💉똑똑 선별진료소💉</Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("Patient")}
        >
          <Icon name="analytics-outline" size={50}></Icon>
          <Text style={styles.text}>확진자 추이{constants.width}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("CurLoc")}
        >
          <Icon name="navigate-outline" size={50}></Icon>
          <Text style={styles.text}>가까운 선별진료소{constants.height}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("Location")}
        >
          <Icon name="map-outline" size={50}></Icon>
          <Text style={styles.text}>지역별 선별진료소</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("QR")}
        >
          <Icon name="qr-code-outline" size={50}></Icon>
          <Text style={styles.text}>나의 QR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer}>Enonymous</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  container1: {
    flex: 1,
    backgroundColor: "#00462a",
    alignItems: "center",
    // height: constants.height * 0.5,
  },
  container2: {
    flex: 6,
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",

    // marginTop: constants.height > 800 ? "2%" : "2%",
    // marginBottom: constants.height > 800 ? "2%" : "2%",
  },
  header: {
    color: "white",
    fontSize: constants.width > 370 ? 30 : 25,
    letterSpacing: 3,
    fontWeight: "bold",
    height: "50%",
    // height: constants.height > 800 ? "80%" : "50%",
    margin: constants.height > 800 ? "15%" : "9%",

    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    flex: 1,
    backgroundColor: "white",
    // margin: constants.height > 800 ? 10 : 5,
    margin: "2%",
    borderWidth: 2,
    borderRadius: 15,
    width: "90%",
    borderColor: "#00462a",
    // height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "gray",
    fontSize: constants.width > 370 ? 30 : 18,
    marginTop: constants.height > 800 ? "2%" : "0.3%",
  },
  footer: {
    flex: 0.7,
    color: "white",
    fontSize: constants.width > 370 ? 30 : 25,
    letterSpacing: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00462a",
  },
});
export default MainPage;