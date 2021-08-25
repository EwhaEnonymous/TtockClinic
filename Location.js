import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import constants from "./constants";
import Dropdown from "./Dropdown";
import { Header, Card } from "react-native-elements";
import { Dimensions } from "react-native";

const Location = ({ navigation }) => {
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
        {/* <View style={{ marginTop: 30 }}>
          <Icon name="hospital-o" size={60}></Icon>
        </View> */}
        <View style={styles.container1}>
          <Card.Title style={styles.title}>
            <Icon3 name="chevron-forward-circle-outline" size={30}></Icon3>{" "}
            지역으로 찾기
          </Card.Title>
          <Text style={styles.mainDescription}>
            찾고 싶은 선별진료소의 위치를 입력해주세요.
          </Text>
        </View>
        <View style={styles.container2}>
          <Card.Divider></Card.Divider>
          <Dropdown />
          <Card.Divider></Card.Divider>
        </View>

        <View style={styles.container3}>
          <Text style={styles.mainDescription}>
            "{Dropdown.Sido}시 {Dropdown.Sigungu}"의 선별진료소 찾기
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Clinic")}
          >
            <Text>
              <Icon3
                name="chevron-forward-circle-outline"
                size={30}
                color="white"
              ></Icon3>
              <Text
                style={styles.buttonText}
                onPress={() => navigation.navigate("Interview")}
              >
                선별진료소 찾기
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
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
    flex: 1,
    margin: "5%",
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
  container1: {
    flex: 0.2,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  container2: {
    flex: 1,
  },
  container3: {
    flex: 0.35,
    alignItems: "center",
    marginTop: "5%",
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
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
  },
  button: {
    fontSize: constants.width > 370 ? 30 : 18,
    borderColor: "#00462a",
    backgroundColor: "#00462a",
    marginTop: "5%",
    borderRadius: 8,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: Dimensions.get("window").height * 0.08,
  },
  buttonText: {
    color: "white",
    fontSize: constants.width > 370 ? 30 : 18,
  },
  description: {
    marginTop: "5%",
    fontSize: constants.width > 370 ? 25 : 15,
    color: "#00462a",
  },
  buttonText: {
    fontSize: constants.width > 370 ? 30 : 24,
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
export default Location;
