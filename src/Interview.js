import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import "react-native-gesture-handler";
import { Header, Input, Card, ButtonGroup } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { useForm, Controller } from "react-hook-form";

import constants from "./constants";
import axios from "axios";
import "react-native-gesture-handler";
import { Checkbox } from "react-native-paper";

const data = [
  { id: 1, txt: "발열(37.5°C 이상, 열감)", isChecked: false },
  { id: 2, txt: "기침", isChecked: false },
  { id: 3, txt: "인후통", isChecked: false },
  { id: 4, txt: "가래", isChecked: false },
  { id: 5, txt: "콧물", isChecked: false },
  { id: 6, txt: "오한", isChecked: false },
  { id: 7, txt: "피로감", isChecked: false },
  { id: 8, txt: "근육통", isChecked: false },
  { id: 9, txt: "설사", isChecked: false },
  { id: 10, txt: "호흡곤란", isChecked: false },
  { id: 11, txt: "기타", isChecked: false },
];
function Interview({ navigation, route }) {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [gen, setGen] = useState("");
  const gender = ["여성", "남성"];
  const [selectedIndex, setSelectedIndex] = useState("");
  const [symptoms, setSymptoms] = useState(data);
  const [checked, setChecked] = useState(false);

  const handleChange = (id) => {
    let temp = symptoms.map((symptom) => {
      if (id === symptom.id) {
        return { ...symptom, isChecked: !symptom.isChecked };
      }
      return symptom;
    });
    setSymptoms(temp);
  };
  let selected = symptoms.filter((symptom) => symptom.isChecked);

  const renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <Card
            containerStyle={{
              borderColor: "#00462a",
              borderWidth: 2,
              borderRadius: 10,
            }}
          >
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.checkboxText}>{item.txt}</Text>
                <Checkbox
                  status={item.isChecked ? "checked" : "unchecked"}
                  onPress={() => {
                    handleChange(item.id);
                  }}
                  style={{ borderColor: "black", borderWidth: "2" }}
                />
              </View>
            </View>
          </Card>
        )}
      />
    );
  };
  const handleSubmit = (e) => {
    axios
      .post(
        "https://www.ttockclinic.com/v1/paper",
        {
          clinicId: `${route.params.id}`,
          name: `${name}`,
          phone: `${phone}`,
        },
        { headers: { "Content-type": `application/json` } }
      )
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  };
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
            <Icon name="chevron-forward-circle-outline" size={30}></Icon> 문진표
            작성하기
          </Card.Title>
          <Text style={styles.mainDescription}>문진표를 작성하여 주세요.</Text>
        </View>
        <View style={styles.container2}>
          <ScrollView>
            <Card>
              <Card.Title style={styles.title}>이름</Card.Title>
              <TextInput
                style={styles.input}
                placeholder="홍길동"
                placeholderTextColor="lightgray"
                value={name}
                onChangeText={(e) => setName(e)}
              />
              <Card.Divider />
              <Card.Title style={styles.title}>생일</Card.Title>
              <TextInput
                style={styles.input}
                placeholder="19700101"
                placeholderTextColor="lightgray"
                value={birth}
                onChangeText={(e) => setBirth(e)}
              />
              <Card.Divider />
              <Card.Title style={styles.title}>연락처</Card.Title>
              <TextInput
                style={styles.input}
                placeholder="010-1234-5678"
                placeholderTextColor="lightgray"
                value={phone}
                onChangeText={(e) => setPhone(e)}
              />
              <Card.Divider />
              <Card.Title style={styles.title}>성별</Card.Title>
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
              </TouchableOpacity>
              <Text>{"\n"}</Text>
              <Card.Divider />
              <View
                style={{
                  width: constants.width * 0.9,
                  marginLeft: "-5%",
                  justifyContent: "center",
                }}
              >
                <Card.Title style={styles.title2}>증상</Card.Title>
                <Text style={styles.mainDescription2}>
                  발생한 증상을 모두 체크하세요.
                </Text>
                <View style={{ marginTop: "-5%" }}>
                  {renderFlatList(symptoms)}
                </View>
              </View>
              <Card.Divider />
            </Card>
          </ScrollView>
        </View>
        <View style={styles.container3}>
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
                onPress={() => {
                  handleSubmit();
                  navigation.navigate("After");
                  console.log(`${name}`, `${phone}`);
                }}
              >
                {" "}
                문진표 제출하기
              </Text>
            </Text>
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
  title2: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "5%",
  },
  container1: {
    flex: 0.15,
    alignItems: "flex-start",
    marginTop: "5%",
  },
  container2: {
    flex: 1,
    borderColor: "black",
    borderRadius: 2,
    alignContent: "center",
    justifyContent: "center",
    width: constants.width,
    marginLeft: "-5%",
    marginRight: "-5%",
  },
  container3: {
    flex: 0.2,
    alignItems: "center",
  },
  mainDescription: {
    fontSize: 18,
    color: "#00462a",
    marginBottom: "10%",
  },
  mainDescription2: {
    fontSize: 18,
    color: "#00462a",
    marginBottom: "10%",
    marginLeft: "5%",
  },
  input: {
    fontSize: 20,
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxText: {
    marginTop: "3%",
    color: "#00462a",
    fontSize: 20,
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
