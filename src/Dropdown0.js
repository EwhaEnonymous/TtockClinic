import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Keyboard, StyleSheet } from "react-native";
import constants from "./constants";
import { Card } from "react-native-elements";
import DD1 from "./Dropdown1";
import DD2 from "./Dropdown2";
function Dropdown0() {
  const [Sido, setSido] = useState([]);
  const placeholderText = "선택하세요";
  const sidoArr = [
    { value: "서울" },
    { value: "경기" },
    { value: "인천" },
    { value: "부산" },
    { value: "광주" },
    { value: "울산" },
    { value: "강원" },
    { value: "제주" },
    { value: "세종" },
    { value: "대전" },
    { value: "대구" },
    { value: "충청북도" },
    { value: "충청남도" },
    { value: "전라북도" },
    { value: "전라남도" },
    { value: "경상북도" },
    { value: "경상남도" },
  ]; //시도 data
  return (
    <>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>시/도</Card.Title>
      </Card>
      <DD1 data={Sido} />
    </>
  );
}
export default Dropdown0;

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
