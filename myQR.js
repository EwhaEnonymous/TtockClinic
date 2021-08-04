import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import { Header, Card } from "react-native-elements";
import "react-native-gesture-handler";

import QrGenerator from "./qrGenerator";
const myQR = ({ navigation }) => {
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
      <View style={styles.containertitle}>
        <Text style={styles.title}>예약 정보</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.info}>날짜| 2021-06-26</Text>
        <Text style={styles.info}>시간| 14:07</Text>
        <Text style={styles.info}>선별진료소| 서대문구 보건소</Text>
      </View>
      <View style={styles.containertitle}>
        <Text style={styles.title}>나의 QR</Text>
      </View>
      <View style={styles.container3}>
        {/* <Icon name="qr-code-outline" size={300}></Icon> */}
        <QrGenerator />
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
    flex: 1.5,
    backgroundColor: "#00462a",
    alignItems: "center",
    marginTop: 0,
    height: 5,
  },
  containertitle: {
    flex: 0.7,
    fontSize: 25,
    alignItems: "center",
    marginTop: 5,
  },
  container2: {
    flex: 3,
    fontSize: 50,
    backgroundColor: "white",
    alignItems: "flex-start",
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    height: 30,
    justifyContent: "center",
  },
  container3: {
    flex: 6,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    marginTop: 0,
  },
  title: {
    color: "black",
    fontSize: 25,
    letterSpacing: 5,
  },
  info: {
    color: "black",
    fontSize: 20,
    letterSpacing: 4,
    padding: 2,
    paddingLeft: 7,
  },
});
export default myQR;
