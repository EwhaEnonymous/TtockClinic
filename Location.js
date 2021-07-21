import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import constants from "./constants";
import Sido from "./Sido";
import Sigungu from "./Sigungu";
const Location = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container1}>
        <Text style={styles.header}>💉똑똑 선별진료소💉</Text>
      </View>
      <View style={styles.container2}>
        <Sido />
        <Sigungu />
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
    marginTop: 0,
    height: 5,
  },
  container2: {
    flex: 6,
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",
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
    marginTop: 50,
    fontSize: constants.width > 370 ? 30 : 18,
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    fontSize: constants.width > 370 ? 10 : 8,
    borderWidth: 2,
    borderRadius: 15,
    width: "70%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
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
export default Location;
