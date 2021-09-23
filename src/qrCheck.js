import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import "react-native-gesture-handler";
import { Header, Card, Input, ListItem } from "react-native-elements";
import "react-native-gesture-handler";
import constants from "./constants";
import axios from "axios";

function qrCheck({ navigation }) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  //const onChangeHandler = (event) => {
  //  setPhone(event.target);
  // console.log(phone);
  //};
  // const handleSubmit = (e) => {
  const getData = () => {
    axios
      .get("https://www.ttockclinic.com/v1/paper", {
        params: { name: `${name}`, phone: `${phone}` },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // };
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
            <Icon name="chevron-forward-circle-outline" size={30}></Icon> QR
            코드 확인하기
          </Card.Title>
          <Text style={styles.mainDescription}>휴대폰번호를 입력해주세요.</Text>
        </View>
        {/* <View style={styles.container2}> */}
        {/* <form onSubmit={handleSubmit}> */}
        <View style={styles.container2}>
          <TextInput
            label="이름"
            style={styles}
            onChange={(e) => {
              //onChangeHandler(e);
              setName(e.target.value);
              console.log(phone);
            }}
          />
          <TextInput
            label="휴대폰번호"
            placeholder="010-1234-5678"
            style={styles}
            onChange={(e) => {
              //onChangeHandler(e);
              setPhone(e.target.value);
              console.log(phone);
            }}
          />
        </View>
        <View style={styles.container3}>
          <TouchableOpacity style={styles.submit} onPress={getData}>
            {/* <button
                type="submit"
                //style = {styles.submit} //왜 submit은 style 적용이 안될까?
              > */}
            <Text>
              <Icon
                name="chevron-forward-circle-outline"
                size={30}
                color="white"
              ></Icon>
              <Text
                style={styles.buttonText}
                // onPress={() => navigation.navigate("QR")}
              >
                나의 QR 코드
              </Text>
            </Text>
            {/* </button> */}
          </TouchableOpacity>
        </View>
        {/* </form> */}
        {/* </View> */}
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Clinic")}
        >
          <Text>
            <Icon
              name="chevron-forward-circle-outline"
              size={30}
              color="white"
            ></Icon>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate("QR")}
            >
              나의 QR 코드
            </Text>
          </Text>
        </TouchableOpacity> */}
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
    flex: 1,
    margin: "5%",
    // backgroundColor: "red",
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
  container1: {
    flex: 0.3,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  container2: {
    flex: 3,
    marginTop: "5%",
  },
  container3: {
    flex: 1.5,
    alignItems: "flex-end",
    marginBottom: "5%",
  },
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
    marginBottom: "10%",
  },
  submit: {
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
    fontSize: constants.width > 370 ? 30 : 24,
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
export default qrCheck;
