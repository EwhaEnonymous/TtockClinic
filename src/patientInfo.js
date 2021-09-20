import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import constants from "./constants";
import { Header, Card } from "react-native-elements";
import axios from "axios";
// const patientInfo = ({ navigation }) => {
// axios
//   .get("v1/covid-url")
//   .then((response) => console.log(response.data))
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });

function patientInfo({ navigation }) {
  const [decideCnt, setDecideCnt] = useState(0);
  const [clearCnt, setClearCnt] = useState(0);
  const [examCnt, setExamCnt] = useState(0);
  const [deathCnt, setDeathCnt] = useState(0);
//  const [careCnt, setCareCnt] = useState(0);
//  const [accExamCnt, setAccExamCnt] = useState(0);
//  const [accExamCompCnt, setAccExamCompCnt] = useState(0);
//  const [accDefRate, setAccDefRate] = useState(0);
  const [decideCnt2, setDecideCnt2] = useState(0);
  const [clearCnt2, setClearCnt2] = useState(0);
  const [examCnt2, setExamCnt2] = useState(0);
  const [deathCnt2, setDeathCnt2] = useState(0);
  


  axios
    .get("https://www.ttockclinic.com/v1/covid-url")
    .then((response) => {
      console.log(response.data.response.body.items.item);
      const connect = response.data.response.body.items.item;
      setDecideCnt(connect[0].decideCnt);
      setClearCnt(connect[0].clearCnt);
      setExamCnt(connect[0].examCnt);
      setDeathCnt(connect[0].deathCnt);
      setDecideCnt2(connect[1].decideCnt);
      setClearCnt2(connect[1].clearCnt);
      setExamCnt2(connect[1].examCnt);
      setDeathCnt2(connect[1].deathCnt);
    });
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
      <View style={styles.container2}>
        <View style={styles.up0}>
          <Text style={styles.up0text}>전일대비 +{decideCnt - decideCnt2}</Text>
        </View>
        <View style={styles.container3}>
          <View style={styles.up1}>
            <View style={styles.box1}>
              <Text style={styles.boxtext1}>확진환자</Text>
              <Text style={styles.boxtext2}>{decideCnt}</Text>
              <Text style={styles.boxtext3}>{decideCnt - decideCnt2}</Text>
            </View>
            <View style={styles.box2}>
              <Text style={styles.boxtext1}>격리해제</Text>
              <Text style={styles.boxtext2}>{clearCnt}</Text>
              <Text style={styles.boxtext3}>{clearCnt - clearCnt2}</Text>
            </View>
            <View style={styles.box3}>
              <Text style={styles.boxtext1}>사망자</Text>
              <Text style={styles.boxtext2}>{deathCnt}</Text>
              <Text style={styles.boxtext3}>{deathCnt - deathCnt2}</Text>
            </View>
            <View style={styles.box4}>
              <Text style={styles.boxtext1}>검사진행</Text>
              <Text style={styles.boxtext2}>{examCnt}</Text>
              <Text style={styles.boxtext3}>{examCnt - examCnt2}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("지도")}
          >
            <Text style={styles.text}>지도</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("지역별 표")}
          >
            <Text style={styles.text}>지역별 표</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("누적확진 추이")}
          >
            <Text style={styles.text}>누적확진 추이</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Alert.alert("일별 신규 확진자수")}
          >
            <Text style={styles.text}>일별 신규 확진자수</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container5}>
          <Text style={styles.graph}>위 버튼 누르면 그래프 바뀜</Text>
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
  container1: {
    flex: 1,
    backgroundColor: "#00462a",
    alignItems: "center",
    marginTop: 0,
    height: 5,
  },
  container2: {
    flex: 6,
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },

  up0: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  up0text: { fontSize: constants.width > 370 ? 30 : 18, color: "red" },
  container3: {
    flex: 1,
    width: "96%",
    alignItems: "center",
  },
  up1: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  box1: {
    flex: 1,
    alignItems: "center",
    margin: 2,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 4,
  },
  box2: {
    flex: 1,
    alignItems: "center",
    margin: 2,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 4,
  },
  box3: {
    flex: 1,
    alignItems: "center",
    margin: 2,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 4,
  },
  box4: {
    flex: 1,
    alignItems: "center",
    margin: 2,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 4,
  },
  boxtext1: {
    fontSize: 23,
    fontWeight: "bold",
    paddingTop: 5,
    marginBottom: 5,
  },
  boxtext2: {
    fontSize: 20,
    color: "blue",
    marginBottom: 5,
  },
  boxtext3: {
    fontSize: 25,
    color: "red",
    marginBottom: 5,
  },
  container4: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "flex-start",
    // backgroundColor: "darkblue",
  },
  text: {
    color: "black",
    fontSize: constants.width > 370 ? 15 : 9,
  },
  btn: {
    margin: 5,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "black",
    padding: 5,
  },
  container5: {
    flex: 3.5,
    width: "96%",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  graph: {
    fontSize: constants.width > 370 ? 30 : 18,
    fontWeight: "900",
  },
  footer: {
    flex: 0.7,
    color: "white",
    fontSize: constants.width > 370 ? 30 : 25,
    letterSpacing: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00462a",
  },
});
export default patientInfo;
