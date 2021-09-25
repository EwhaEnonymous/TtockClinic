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
  const [msg, setMsg] = useState("");
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
        setMsg("접수 내역이 없습니다.");
      });
  };

  // };
  return (
    <View style={styles.body}>
      {/* Header Bar */}
      <Header
        placement="left"
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
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate("qrCheck")}>
            <Text style={styles.menuText}>My</Text>
          </TouchableOpacity>
        }
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

        <View style={styles.container2}>
          <Card.Title style={styles.title}>이름</Card.Title>
          <TextInput
            label="이름"
            placeholder="김똑똑"
            style={styles.box}
            onChange={(e) => {
              setName(e.target.value);
              console.log(phone);
            }}
          />
          <Text>{"\n"}</Text>
          <Card.Divider />
          <Card.Title style={styles.title}>휴대폰번호</Card.Title>
          <TextInput
            label="휴대폰번호"
            placeholder="010-1234-5678"
            style={styles.box}
            onChange={(e) => {
              setPhone(e.target.value);
              console.log(phone);
            }}
          />
          <Text style={styles.title}>{msg}</Text>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity style={styles.submit} onPress={getData}>
            <Icon name="chevron-forward-circle-outline" size={30} color="white">
              {" "}
              <Text
                style={styles.buttonText}
                onPress={() =>
                  navigation.navigate("QR", { name: name, phone: phone })
                }
              >
                {""}접수 내역 조회하기
              </Text>
            </Icon>
          </TouchableOpacity>
        </View>
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
  menuText: {
    color: "#fff",
    fontSize: 20,
    marginRight: "5%",
  },
  container: {
    flex: 1,
    margin: "5%",
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
    textAlign: "left",
  },
  container1: {
    flex: 0.15,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  container2: {
    flex: 0.5,
    borderColor: "black",
    borderRadius: 2,
    alignContent: "center",
    justifyContent: "center",
  },
  container3: {
    flex: 0.5,
    alignItems: "center",
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
    height: "20%",
  },
  box: {
    borderColor: "#00462a",
    height: "15%",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
  },
  buttonText: {
    fontSize: 25,
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
export default qrCheck;
