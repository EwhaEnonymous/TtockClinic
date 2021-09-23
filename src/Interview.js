import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import "react-native-gesture-handler";
import { Header, Input, Card, ButtonGroup } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import constants from "./constants";
import axios from "axios";
import { TextInput } from "react-native-gesture-handler";
// import RNMultiSelect, {
//   IMultiSelectDataTypes,
// } from "@freakycoder/react-native-multiple-select";

function Interview({ navigation, route }) {
  // const [name, setName] = useState("");
  // const [birth, setBirth] = useState(0);
  // const [phone, setPhone] = useState("");
  // const [gen, setGen] = useState("");
  const gender = ["여성", "남성"];
  const [values, setValues] = useState({ name: "", birth: "", phone: "" });
  const [selectedIndex, setSelectedIndex] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log(name, birth, phone);

    axios
      .post("https://www.ttockclinic.com/v1/papers", {
        headers: { "Content-type": `application/json` },
        clinicId: `${route.params.id}`,
        name: `${values.name}`,
        phone: `${values.phone}`,
        // name: `${name}`,
        // phone: `${phone}`,
      })
      .then((response) => console.log(response.data))
      .catch((response) => {
        console.log("Error!");
      });
  };
  console.log("VAL", values);
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
          <form onSubmit={handleSubmit}>
            <label>
              이름
              <input
                type="text"
                name="name"
                placeholder="홍길동"
                value={values.name}
                onChange={handleChange}
              />
            </label>
            <label>
              생년월일
              <input
                type="number"
                name="birth"
                placeholder="14430815"
                value={values.birth}
                onChange={handleChange}
              />
            </label>
            <label>
              전화번호
              <input
                type="string"
                name="phone"
                placeholder="010-1234-5678"
                value={values.phone}
                onChange={handleChange}
              />
            </label>
            <TouchableOpacity>
              <ButtonGroup
                buttons={gender} //여성, 남성
                selectedIndex={selectedIndex}
                selectedTextStyle={{
                  backgroundColor: "#00462a",
                  color: "white",
                }}
                selectedButtonStyle={{ backgroundColor: "#00462a" }}
                containerStyle={styles.genderButton} //css
                textStyle={styles.genderText} //텍스트 css
                onPress={(e) => setSelectedIndex(e)}
              />
            </TouchableOpacity>{" "}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("After")}
            >
              <Text>
                <Icon
                  name="chevron-forward-circle-outline"
                  size={30}
                  color="white"
                ></Icon>
                <Text
                  type="submit"
                  style={styles.buttonText}
                  onPress={() => navigation.navigate("After")}
                >
                  문진표 작성 완료
                  {/* <input type="submit" value="" /> */}
                </Text>
              </Text>
            </TouchableOpacity>
          </form>
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
    flex: 1.5,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
    marginBottom: "10%",
  },
  genderText: {
    fontSize: 18,
    color: "#00462a",
  },
  genderButton: {
    borderColor: "#00462a",
    backgroundColor: "white",
    borderRadius: 8,
    margin: "0.1%",
    height: "50px",
    width: "300px",
    justifyContent: "center",
    alignContent: "center",
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
