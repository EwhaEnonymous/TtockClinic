import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/AntDesign";
import "react-native-gesture-handler";
import constants from "./constants";
import Dropdown from "./Dropdown";
import { Header, Card } from "react-native-elements";

const Location = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={
          <TouchableOpacity>
            <Text
              style={{
                color: "#fff",
                letterSpacing: 3,
                fontWeight: "bold",
                fontSize: 20,
              }}
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
      <View style={styles.container2}>
        <View style={{ marginTop: 30 }}>
          <Icon name="hospital-o" size={60}></Icon>
        </View>

        <Text style={styles.text1}>
          찾고 싶은 선별진료소의 위치를 입력해주세요.
        </Text>
        <Dropdown />
        <TouchableOpacity
          style={styles.menu}
          onPress={() => navigation.navigate("Clinic")}
        >
          <View>
            <Text style={styles.text2}>
              <Icon2 name="arrowright" size={30} color={"white"} />
              &nbsp; 선별진료소 찾기!
            </Text>
          </View>
        </TouchableOpacity>
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

  menu: {
    marginTop: 50,
    fontSize: constants.width > 370 ? 30 : 18,
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    fontSize: constants.width > 370 ? 10 : 8,
    borderWidth: 2,
    borderRadius: 15,
    width: "78%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "70%",
  },
  text1: {
    marginTop: "8%",
    fontSize: constants.width > 370 ? 20 : 16,
    alignItems: "center",
    color: "#00462a",
    fontWeight: "bold",
  },
  text2: {
    fontSize: constants.width > 370 ? 30 : 24,
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
export default Location;
