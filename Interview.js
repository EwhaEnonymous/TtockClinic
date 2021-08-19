import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { Header, Input, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import constants from "./constants";
import { Dimensions } from "react-native";
import axios from "axios";

function Interview({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);

  var gender = [
    { label: "남성", value: 0 },
    { label: "여성", value: 1 },
  ];
  axios
    .post("/v1/papers", { loc: "????", name: name, phone: phone })
    .then((response) => console.log(response.data))
    .catch((response) => {
      console.log("Error!");
    });

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
            <Icon name="chevron-forward-circle-outline" size={30}></Icon> 문진표
            작성하기
          </Card.Title>
          <Text style={styles.mainDescription}>문진표를 작성하여 주세요.</Text>
        </View>
        <View style={styles.container2}>
          <Input
            label="이름"
            placeholder="홍길동"
            style={styles}
            onChangeText={(value) => setName(value)}
          />
          <Input
            label="휴대폰번호"
            placeholder="010-1234-5678"
            style={styles}
            onChangeText={(value) => setPhone(value)}
          />
          <View>{/* 추가적인 정보 들어갈 부분 */}</View>
        </View>
        <TouchableOpacity
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
              onPress={() => navigation.navigate("After")}
            >
              문진표 작성 완료
            </Text>
          </Text>
        </TouchableOpacity>
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
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
    marginBottom: "10%",
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
    fontSize: constants.width > 370 ? 30 : 24,
    alignItems: "center",
    color: "white",
    justifyContent: "center",
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
export default Interview;
