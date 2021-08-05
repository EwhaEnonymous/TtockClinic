import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Keyboard, StyleSheet } from "react-native";
import constants from "./constants";
import { Card } from "react-native-elements";
import sidoArr from "./LocationData";
import sigunguArr from "./LocationData";

function Dropdown1() {
  const [Sido, setSido] = useState([]);
  const [Sigungu, setSigungu] = useState([]);
  const placeholderText = "선택하세요";

  function Dropdown1() {
    return (
      <>
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          value={Sido}
          onValueChange={(Sido) => setSido(Sido)}
          items={sidoArr}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          key={Sido}
          style={pickerStyle}
        />
        {console.log(Sido)}
      </>
    );
  }
  function Dropdown2() {
    if (Sido === "seoul") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[0].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "gyeonggi") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[1].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "incheon") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[2].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "busan") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[3].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "gwangju") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[4].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "ulsan") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[5].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "gangwon") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[6].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "daejeon") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[7].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "daegu") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[8].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "choongbuk") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[9].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "choongnam") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[10].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "jeonbuk") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[11].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "jeonnam") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[12].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "gyeongbuk") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[13].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "gyeongnam") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[14].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "sejong") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[15].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    } else if (Sido === "jeju") {
      return (
        <RNPickerSelect
          placeholder={{ label: placeholderText }}
          onValueChange={(Sigungu) => setSigungu(Sigungu)}
          items={sigunguArr[16].sigungu}
          onOpen={() => {
            Keyboard.dismiss();
          }}
          style={pickerStyle}
        />
      );
    }
  }
  return (
    <>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>시/도</Card.Title>
        {Dropdown1()}
      </Card>
      <Card.Divider></Card.Divider>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.title}>시/군/구</Card.Title>
        {Dropdown2()}
      </Card>
    </>
  );
}

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
const pickerStyle = {
  inputIOS: {
    height: 60,
    fontSize: constants.width > 370 ? 25 : 20,
    paddingLeft: 30,
    color: "black",
    borderColor: "#00462a",
    borderWidth: "1.5px",
    borderRadius: "5px",
    margin: 12,
  },
  inputAnd6roid: {
    height: 60,
    fontSize: constants.width > 370 ? 25 : 20,
    paddingLeft: 30,
    color: "black",
    borderColor: "#00462a",
    borderWidth: "1.5px",
    borderRadius: "5px",
    margin: 12,
  },
  placeholderColor: { color: "red" },
};
export default Dropdown1;
