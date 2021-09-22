import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Keyboard, StyleSheet } from "react-native";
import constants from "./constants";
import DD2 from "./Dropdown2";
import { Card } from "react-native-elements";

function Dropdown1(props) {
  const [Sido, setSido] = useState([]);
  const placeholderText = "선택하세요";

  const sidoArr = [
    { label: "서울", value: "서울" },
    { label: "경기", value: "경기" },
    { label: "인천", value: "인천" },
    { label: "부산", value: "부산" },
    { label: "광주", value: "광주" },
    { label: "울산", value: "울산" },
    { label: "강원", value: "강원" },
    { label: "제주", value: "제주" },
    { label: "세종", value: "세종" },
    { label: "대전", value: "대전" },
    { label: "대구", value: "대구" },
    { label: "충청북도", value: "충청북도" },
    { label: "충청남도", value: "충청남도" },
    { label: "전라북도", value: "전라북도" },
    { label: "전라남도", value: "전라남도" },
    { label: "경상북도", value: "경상북도" },
    { label: "경상남도", value: "경상남도" },
  ]; //시도 data

  return (
    <>
      <RNPickerSelect
        placeholder={{ label: placeholderText }}
        value={Sido}
        onValueChange={(Sido) => {
          setSido(Sido);
          console.log(Sido);
        }}
        items={sidoArr}
        onOpen={() => {
          Keyboard.dismiss();
        }}
        key={Sido}
        style={pickerStyle}
      />
      <Card.Divider></Card.Divider>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>시/군/구</Card.Title>
      </Card>
      <DD2 data={Sido} />
    </>
  );
}
export default Dropdown1;
const styles = StyleSheet.create({
  card: {
    marginLeft: "-5%",
    marginRight: "-5%",
    marginBottom: "5%",
    marginTop: "5%",
    borderWidth: 0,
    shadowColor: "rgba(0,0,0, 0.0)", //ios 그림자 없애기
    elevation: 0, //안드로이드 그림자 없애기
  },
  title: {
    fontSize: 30,
    color: "#00462a",
    fontWeight: "bold",
  },
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    height: 60,
    fontSize: constants.width > 370 ? 25 : 20,
    paddingLeft: 30,
    color: "black",
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 5,
    margin: 12,
  },
  inputAndroid: {
    height: 60,
    fontSize: constants.width > 370 ? 25 : 20,
    paddingLeft: 30,
    color: "red",
    backgroundColor: "red",
    borderColor: "#00462a",
    borderWidth: 2,
    borderRadius: 5,
    margin: 12,
  },
  placeholderColor: { color: "red" },
});
